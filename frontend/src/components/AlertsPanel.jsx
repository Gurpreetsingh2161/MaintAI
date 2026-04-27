import React from 'react';
import { AlertTriangle, Info, Zap } from 'lucide-react';

const AlertsPanel = ({ data }) => {
  const getSeverityIcon = (type) => {
    switch (type) {
      case 'critical': return <Zap className="w-5 h-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />;
      default: return <Info className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />;
    }
  };

  const getAlertSeverity = (alertText) => {
    if (alertText.toLowerCase().includes('fail') || alertText.toLowerCase().includes('immediate')) return 'critical';
    if (alertText.toLowerCase().includes('schedule')) return 'warning';
    return 'info';
  };

  return (
    <div className="glass-panel p-6 flex flex-col h-full">
      <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest mb-4">Diagnostics & Alerts</h3>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {data.alerts.length === 0 && data.anomalies.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-500 uppercase tracking-widest text-sm font-semibold">
            System Normal - No Alerts 
          </div>
        ) : (
          <>
            {data.alerts.map((alert, i) => (
              <div key={`alert-${i}`} className="p-4 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-start">
                {getSeverityIcon(getAlertSeverity(alert))}
                <div>
                  <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider">{getAlertSeverity(alert)} Alert</h4>
                  <p className="text-slate-400 text-sm mt-1">{alert}</p>
                </div>
              </div>
            ))}
            {data.anomalies.map((anomaly, i) => (
              <div key={`anomaly-${i}`} className="p-4 bg-slate-800/80 border border-slate-700/50 rounded-lg flex items-start">
                {getSeverityIcon('warning')}
                <div>
                  <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider">Anomaly Detected</h4>
                  <p className="text-slate-400 text-sm mt-1">{anomaly}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AlertsPanel;
