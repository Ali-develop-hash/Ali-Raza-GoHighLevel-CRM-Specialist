import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Automation Engine Core
function AutomationCore({ mouse }) {
  const group = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  // Outer Icosahedron Geometry
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2.1, 1), []);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  
  // Inner Core Sphere
  const innerCoreGeo = useMemo(() => new THREE.IcosahedronGeometry(1.2, 2), []);
  const innerEdgesGeo = useMemo(() => new THREE.EdgesGeometry(innerCoreGeo), [innerCoreGeo]);

  // Extract unique vertex positions for nodes
  const nodePositions = useMemo(() => {
    const positions = geo.attributes.position;
    const seen = new Map();
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i).toFixed(3);
      const y = positions.getY(i).toFixed(3);
      const z = positions.getZ(i).toFixed(3);
      seen.set(`${x},${y},${z}`, [Number(x), Number(y), Number(z)]);
    }
    return Array.from(seen.values());
  }, [geo]);

  // Orbiting Satellite Beads
  const satellites = useMemo(() => [
    { radius: 2.9, speed: 0.8, color: '#2ED9A8', size: 0.08, tiltX: 0.4, tiltZ: 0.2 },
    { radius: 3.4, speed: -0.6, color: '#00E5FF', size: 0.09, tiltX: -0.5, tiltZ: 0.6 },
    { radius: 3.8, speed: 0.5, color: '#F5B841', size: 0.07, tiltX: 0.7, tiltZ: -0.3 },
    { radius: 2.6, speed: -0.9, color: '#8B5CF6', size: 0.06, tiltX: -0.3, tiltZ: -0.5 },
  ], []);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Base rotation
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x += delta * 0.03;

    // Parallax mouse follow
    const targetRotY = mouse.current.x * 0.45;
    const targetRotX = -mouse.current.y * 0.35;
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.04;

    // Rings independent rotation
    if (ring1.current) {
      ring1.current.rotation.z += delta * 0.25;
      ring1.current.rotation.x += delta * 0.1;
    }
    if (ring2.current) {
      ring2.current.rotation.y -= delta * 0.3;
      ring2.current.rotation.z += delta * 0.15;
    }
    if (ring3.current) {
      ring3.current.rotation.x -= delta * 0.2;
      ring3.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={group}>
      {/* Outer Lattice Wireframe */}
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color={'#2ED9A8'} transparent opacity={0.65} />
      </lineSegments>

      {/* Inner Glowing Core */}
      <lineSegments geometry={innerEdgesGeo}>
        <lineBasicMaterial color={'#00E5FF'} transparent opacity={0.35} />
      </lineSegments>

      {/* Inner Core Point Glow */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial color={'#2ED9A8'} transparent opacity={0.08} wireframe />
      </mesh>

      {/* Pulsing Vertex Nodes */}
      {nodePositions.map((pos, idx) => (
        <PulsingNode
          key={idx}
          position={pos}
          delay={idx * 0.18}
          color={idx % 3 === 0 ? '#00E5FF' : idx % 2 === 0 ? '#2ED9A8' : '#F5B841'}
        />
      ))}

      {/* Orbital Ring 1 (Emerald) */}
      <mesh ref={ring1} rotation={[Math.PI / 4, 0, 0]}>
        <ringGeometry args={[2.7, 2.73, 64]} />
        <meshBasicMaterial color={'#2ED9A8'} transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbital Ring 2 (Cyan) */}
      <mesh ref={ring2} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <ringGeometry args={[3.2, 3.23, 64]} />
        <meshBasicMaterial color={'#00E5FF'} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbital Ring 3 (Amber/Purple) */}
      <mesh ref={ring3} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <ringGeometry args={[3.6, 3.63, 64]} />
        <meshBasicMaterial color={'#F5B841'} transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbiting Satellite Data Packets */}
      {satellites.map((sat, idx) => (
        <SatellitePacket key={idx} config={sat} />
      ))}
    </group>
  );
}

// Pulsing Vertex Node
function PulsingNode({ position, delay, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * 2 + delay;
    const scale = 1 + Math.sin(t) * 0.4;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Orbiting Data Packet
function SatellitePacket({ config }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * config.speed;
    const x = Math.cos(t) * config.radius;
    const z = Math.sin(t) * config.radius;
    const y = Math.sin(t * 1.5) * (config.radius * 0.35);

    // Apply tilt
    meshRef.current.position.x = x * Math.cos(config.tiltZ) - y * Math.sin(config.tiltZ);
    meshRef.current.position.y = x * Math.sin(config.tiltZ) + y * Math.cos(config.tiltZ) + Math.sin(t) * config.tiltX;
    meshRef.current.position.z = z;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[config.size, 16, 16]} />
      <meshBasicMaterial color={config.color} />
    </mesh>
  );
}

function Rig() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return <AutomationCore mouse={mouse} />;
}

export default function Lattice3D() {
  const [ok, setOk] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.innerWidth < 640;
    let hasWebGL = true;
    try {
      const c = document.createElement('canvas');
      hasWebGL = !!(c.getContext('webgl') || c.getContext('experimental-webgl'));
    } catch {
      hasWebGL = false;
    }
    setOk(!prefersReduced && hasWebGL && !isSmall);
  }, []);

  if (!ok) {
    return <div className="lattice-fallback" aria-hidden="true" />;
  }

  return (
    <div className="lattice3d" aria-hidden="true">
      <Suspense fallback={<div className="lattice-fallback" />}>
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 42 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Rig />
        </Canvas>
      </Suspense>
    </div>
  );
}

