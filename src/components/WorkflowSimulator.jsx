import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Zap, Bot, MessageSquare, Calendar, CheckCircle2, ShieldCheck, Terminal, ArrowRight, Activity } from 'lucide-react';
import { workflowSimulationPresets } from '../data/content';
import './WorkflowSimulator.css';

export default function WorkflowSimulator() {
  const [selectedPresetId, setSelectedPresetId] = useState('missed-call');
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [logs, setLogs] = useState([]);
  const consoleBodyRef = useRef(null);
  const intervalRef = useRef(null);

  const preset = workflowSimulationPresets.find((p) => p.id === selectedPresetId) || workflowSimulationPresets[0];

  // Auto-scroll ONLY inside the terminal body container (zero window jump)
  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [logs]);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Handle Preset Switching
  const handleSelectPreset = (id) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSelectedPresetId(id);
    resetSimulation();
  };

  const resetSimulation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setActiveStepIndex(-1);
    setIsCompleted(false);
    setLogs([]);
  };

  const runSimulation = () => {
    if (isRunning) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsRunning(true);
    setIsCompleted(false);
    setActiveStepIndex(0);
    setLogs([
      { time: '00:00.00', message: `⚡ Ingesting trigger: "${preset.trigger}"`, type: 'info' }
    ]);

    let currentStep = 0;

    intervalRef.current = setInterval(() => {
      currentStep++;
      if (currentStep < preset.steps.length) {
        setActiveStepIndex(currentStep);
        const stepData = preset.steps[currentStep];
        setLogs((prev) => [
          ...prev,
          {
            time: `00:0${currentStep * 1}.${Math.floor(Math.random() * 80 + 10)}`,
            message: `✓ Step ${stepData.step}: [${stepData.tag}] ${stepData.title} -> ${stepData.detail}`,
            type: 'step'
          }
        ]);
      } else {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setIsCompleted(true);
        setLogs((prev) => [
          ...prev,
          {
            time: `00:06.80`,
            message: `🎯 Workflow Execution Complete! Result: ${preset.recoveredMetric}`,
            type: 'success'
          }
        ]);
      }
    }, 1000);
  };

  return (
    <section className="section workflow-simulator" id="simulator">
      {/* Background glow */}
      <div className="glow-orb" style={{ top: '20%', left: '5%', width: '400px', height: '400px', background: 'rgba(46, 217, 168, 0.08)' }} />
      <div className="glow-orb" style={{ bottom: '10%', right: '5%', width: '450px', height: '450px', background: 'rgba(0, 229, 255, 0.06)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--cyan">
            <Activity size={14} /> Interactive Sandbox
          </span>
          <h2 className="section-title">
            Test a Live <span className="text-gradient">GoHighLevel Workflow</span>
          </h2>
          <p className="section-sub">
            Experience how my custom GHL logic handles real inbound traffic in real-time. Select an industry scenario and watch the sub-second automation sequence execute.
          </p>
        </div>

        {/* Preset Tabs */}
        <div className="simulator-tabs">
          {workflowSimulationPresets.map((p) => {
            const active = p.id === selectedPresetId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelectPreset(p.id)}
                className={`simulator-tab ${active ? 'simulator-tab--active' : ''}`}
              >
                <span className="simulator-tab__industry">{p.industry}</span>
                <strong className="simulator-tab__title">{p.title}</strong>
              </button>
            );
          })}
        </div>

        {/* Simulator Grid Canvas */}
        <div className="simulator-canvas glass-panel">
          {/* Top Bar: Trigger & Control */}
          <div className="simulator-canvas__header">
            <div className="simulator-canvas__trigger-box">
              <span className="simulator-canvas__trigger-label">Active Trigger Event:</span>
              <div className="simulator-canvas__trigger-value">
                <Zap size={16} className="text-amber" />
                <span>{preset.trigger}</span>
              </div>
            </div>

            <div className="simulator-canvas__controls">
              <button
                type="button"
                onClick={resetSimulation}
                className="btn btn-ghost btn-sm"
                title="Reset simulation"
              >
                <RotateCcw size={15} />
                <span>Reset</span>
              </button>

              <button
                type="button"
                onClick={runSimulation}
                disabled={isRunning}
                className="btn btn-primary btn-sm simulator-run-btn"
              >
                {isRunning ? (
                  <>
                    <Activity size={15} className="spinner-icon" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play size={15} fill="currentColor" />
                    <span>Run Simulation</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Visual Node Flowchart */}
          <div className="simulator-nodes">
            {preset.steps.map((s, idx) => {
              const isPassed = activeStepIndex > idx || isCompleted;
              const isCurrent = activeStepIndex === idx && isRunning;
              const isPending = activeStepIndex < idx && !isCompleted;

              return (
                <div
                  key={s.step}
                  className={`sim-node ${isCurrent ? 'sim-node--active' : ''} ${isPassed ? 'sim-node--passed' : ''} ${isPending ? 'sim-node--pending' : ''}`}
                >
                  <div className="sim-node__header">
                    <span className="sim-node__badge">{s.tag}</span>
                    <span className="sim-node__delay">{s.delay}</span>
                  </div>

                  <div className="sim-node__body">
                    <div className="sim-node__icon-wrap">
                      {idx === 0 && <Zap size={16} />}
                      {idx === 1 && <ShieldCheck size={16} />}
                      {idx === 2 && <MessageSquare size={16} />}
                      {idx === 3 && <Bot size={16} />}
                      {idx === 4 && <Calendar size={16} />}
                      {idx >= 5 && <CheckCircle2 size={16} />}
                    </div>
                    <div className="sim-node__text-wrap">
                      <h4 className="sim-node__title">{s.title}</h4>
                      <p className="sim-node__desc">{s.detail}</p>
                    </div>
                  </div>

                  {/* Connecting Pulse Line (on desktop) */}
                  {idx < preset.steps.length - 1 && (
                    <div className={`sim-node__connector ${isPassed ? 'sim-node__connector--active' : ''}`}>
                      <div className="sim-node__pulse-ball" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Outcome & Terminal Console */}
          <div className="simulator-console">
            <div className="simulator-console__header">
              <div className="simulator-console__dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <span className="simulator-console__title">
                <Terminal size={14} /> GHL Engine Execution Logs
              </span>
              {isCompleted && (
                <span className="simulator-console__status-badge">
                  ✓ Pipeline Complete
                </span>
              )}
            </div>

            <div className="simulator-console__body" ref={consoleBodyRef}>
              {logs.length === 0 ? (
                <div className="simulator-console__idle">
                  <span>Click "Run Simulation" above to execute this GoHighLevel automated engine.</span>
                </div>
              ) : (
                logs.map((l, i) => (
                  <div key={i} className={`console-line console-line--${l.type}`}>
                    <span className="console-line__time">[{l.time}]</span>
                    <span className="console-line__msg">{l.message}</span>
                  </div>
                ))
              )}
            </div>

            {/* Success Summary Pill */}
            <AnimatePresence>
              {isCompleted && (
                <motion.div
                  className="simulator-result"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="simulator-result__badge">
                    <CheckCircle2 size={18} className="text-accent" />
                    <strong>Measurable Outcome:</strong>
                    <span className="simulator-result__metric">{preset.recoveredMetric}</span>
                  </div>
                  <a
                    href="https://wa.me/923326607846?text=Hi%20Ali,%20I%20tested%20your%20GHL%20Workflow%20Simulator%20and%20want%20to%20build%20a%20similar%20system%20for%20my%20business."
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Deploy This in My CRM <ArrowRight size={14} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
