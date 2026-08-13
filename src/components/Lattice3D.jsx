import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Build a set of nodes positioned on an icosahedron's vertices, connected
// by thin glowing lines -- a "connected systems / automation flow" motif.
function Lattice({ mouse }) {
  const group = useRef();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.9, 1), []);
  const positions = geo.attributes.position;

  const nodePositions = useMemo(() => {
    const seen = new Map();
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i).toFixed(3);
      const y = positions.getY(i).toFixed(3);
      const z = positions.getZ(i).toFixed(3);
      seen.set(`${x},${y},${z}`, [Number(x), Number(y), Number(z)]);
    }
    return Array.from(seen.values());
  }, [positions]);

  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += delta * 0.02;
    // gentle follow toward mouse
    group.current.rotation.y += (mouse.current.x * 0.25 - group.current.rotation.y * 0.0) * 0.0;
    group.current.rotation.x += mouse.current.y * 0.0006;
    group.current.rotation.y += mouse.current.x * 0.0006;
  });

  return (
    <group ref={group}>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color={'#2ED9A8'} transparent opacity={0.55} />
      </lineSegments>
      {nodePositions.map((p, i) => (
        <Node key={i} position={p} delay={i * 0.13} />
      ))}
    </group>
  );
}

function Node({ position, delay }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay;
    const s = 1 + Math.sin(t * 1.6) * 0.35;
    if (ref.current) ref.current.scale.setScalar(s);
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial color={'#F5B841'} />
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
  return <Lattice mouse={mouse} />;
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
          camera={{ position: [0, 0, 6], fov: 42 }}
          dpr={[1, 1.6]}
          gl={{ antialias: true, alpha: true }}
        >
          <Rig />
        </Canvas>
      </Suspense>
    </div>
  );
}
