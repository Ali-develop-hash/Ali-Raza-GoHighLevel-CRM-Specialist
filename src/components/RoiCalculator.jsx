import { useState, useMemo } from 'react';
import { Calculator, TrendingUp, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import './RoiCalculator.css';

export default function RoiCalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(120);
  const [dealValue, setDealValue] = useState(1800);
  const [responseTime, setResponseTime] = useState('slow'); // 'fast', 'medium', 'slow', 'very-slow'
  const [closeRate, setCloseRate] = useState(12);

  // Leakage percentages based on lead response latency studies
  const responseMultiplier = useMemo(() => {
    switch (responseTime) {
      case 'fast': return 0.08; // 8% lost
      case 'medium': return 0.28; // 28% lost
      case 'slow': return 0.52; // 52% lost
      case 'very-slow': return 0.74; // 74% lost
      default: return 0.50;
    }
  }, [responseTime]);

  // Calculations
  const leadsLostMonthly = Math.round(monthlyLeads * responseMultiplier);
  const dealsLostMonthly = Math.round(leadsLostMonthly * (closeRate / 100));
  const revenueLostMonthly = dealsLostMonthly * dealValue;
  const annualRecoverableRevenue = Math.round(revenueLostMonthly * 12 * 0.75); // 75% recapture rate with sub-60s GHL system
  const annualRecoveredDeals = Math.round(dealsLostMonthly * 12 * 0.75);

  const formattedAnnual = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(annualRecoverableRevenue);

  const formattedMonthly = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(revenueLostMonthly);

  return (
    <section className="section roi-calculator" id="roi-calculator">
      {/* Ambient background glow */}
      <div className="glow-orb" style={{ top: '15%', right: '10%', width: '380px', height: '380px', background: 'rgba(245, 184, 65, 0.07)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--amber">
            <Calculator size={14} /> Revenue Impact Analysis
          </span>
          <h2 className="section-title">
            Lead Leak & <span className="text-gradient">GHL ROI Recovery</span> Calculator
          </h2>
          <p className="section-sub">
            Slow follow-up costs businesses thousands every single month. Calculate how much lost revenue an automated GoHighLevel speed-to-lead system can plug.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="roi-grid glass-panel">
          {/* Controls Column */}
          <div className="roi-controls">
            <h3 className="roi-controls__heading">1. Enter Your Pipeline Metrics</h3>

            {/* Monthly Leads */}
            <div className="roi-input-group">
              <div className="roi-input-label">
                <span>Monthly Inbound Leads:</span>
                <strong>{monthlyLeads} leads/mo</strong>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="roi-slider-limits">
                <span>20</span>
                <span>800+</span>
              </div>
            </div>

            {/* Average Deal Value */}
            <div className="roi-input-group">
              <div className="roi-input-label">
                <span>Average Deal / Customer Value ($):</span>
                <strong>${dealValue.toLocaleString()}</strong>
              </div>
              <input
                type="range"
                min="300"
                max="10000"
                step="100"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="roi-slider-limits">
                <span>$300</span>
                <span>$10,000+</span>
              </div>
            </div>

            {/* Current Speed to Lead */}
            <div className="roi-input-group">
              <div className="roi-input-label">
                <span>Current Average Response Time:</span>
              </div>
              <div className="roi-time-options">
                <button
                  type="button"
                  onClick={() => setResponseTime('fast')}
                  className={`roi-time-btn ${responseTime === 'fast' ? 'roi-time-btn--active' : ''}`}
                >
                  &lt; 5 Minutes
                </button>
                <button
                  type="button"
                  onClick={() => setResponseTime('medium')}
                  className={`roi-time-btn ${responseTime === 'medium' ? 'roi-time-btn--active' : ''}`}
                >
                  15 - 60 Mins
                </button>
                <button
                  type="button"
                  onClick={() => setResponseTime('slow')}
                  className={`roi-time-btn ${responseTime === 'slow' ? 'roi-time-btn--active' : ''}`}
                >
                  2 - 6 Hours
                </button>
                <button
                  type="button"
                  onClick={() => setResponseTime('very-slow')}
                  className={`roi-time-btn ${responseTime === 'very-slow' ? 'roi-time-btn--active' : ''}`}
                >
                  Next Day / Slow
                </button>
              </div>
            </div>

            {/* Close Rate */}
            <div className="roi-input-group">
              <div className="roi-input-label">
                <span>Estimated Sales Close Rate:</span>
                <strong>{closeRate}%</strong>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="roi-slider-limits">
                <span>5%</span>
                <span>35%</span>
              </div>
            </div>
          </div>

          {/* Output / Results Column */}
          <div className="roi-results">
            <div className="roi-results__card">
              <div className="roi-results__stat-leak">
                <div className="roi-results__stat-header">
                  <AlertTriangle size={18} className="text-amber" />
                  <span>Estimated Revenue Leaking:</span>
                </div>
                <div className="roi-results__leak-val">{formattedMonthly} <small>/ month</small></div>
                <p className="roi-results__leak-desc">
                  Based on ~{leadsLostMonthly} uncontacted leads slipping away to competitors every 30 days.
                </p>
              </div>

              <div className="roi-results__divider" />

              <div className="roi-results__stat-recover">
                <div className="roi-results__stat-header">
                  <TrendingUp size={20} className="text-accent" />
                  <span>Estimated Annual Recovered Pipeline:</span>
                </div>
                <div className="roi-results__recover-val text-gradient">
                  {formattedAnnual}
                </div>
                <span className="roi-results__recover-sub">
                  +{annualRecoveredDeals} additional closed deals saved by sub-60s automated CRM follow-up
                </span>
              </div>

              <div className="roi-results__guarantee">
                <ShieldCheck size={16} className="text-accent" />
                <span>Zero lead leakage with Ali's custom GHL snapshot & AI triage.</span>
              </div>

              <a
                href={`https://wa.me/923326607846?text=Hi%20Ali,%20I%20used%20your%20ROI%20Calculator.%20We%20get%20${monthlyLeads}%20leads/mo%20with%20$${dealValue}%20deal%20size%20and%20want%20to%20plug%20our%20lead%20leaks.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary roi-results__cta"
              >
                <span>Plug This Leak In My CRM</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
