import React from 'react';
import { getDashboardSummary } from '../utils/mockData';
import { Zap, AlertTriangle } from 'lucide-react';

const MaintenanceQueue = () => {
  const summary = getDashboardSummary();
  // Combine and sort by severity (critical first)
  const queue = [...summary.critical_list, ...summary.warning_list];

  return (
    <div className="glass-panel p-6 col-span-full">
      <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest mb-4">Required Maintenance Queue</h3>
      <p className="text-slate-400 text-sm mb-6">List of engines identified as Warning or Critical, including detailed deterioration causes derived from Turbofan predictive telemetry.</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/50">
              <th className="p-3 text-slate-400 text-xs uppercase tracking-wider font-semibold">Engine ID</th>
              <th className="p-3 text-slate-400 text-xs uppercase tracking-wider font-semibold">Status</th>
              <th className="p-3 text-slate-400 text-xs uppercase tracking-wider font-semibold">Est. RUL</th>
              <th className="p-3 text-slate-400 text-xs uppercase tracking-wider font-semibold w-1/2">Diagnostic Reason</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((engine, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <td className="p-3 text-slate-200 font-medium">#{engine.id.toString().padStart(3, '0')}</td>
                <td className="p-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase ${
                    engine.status === 'critical' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-400/20 text-amber-400'
                  }`}>
                    {engine.status === 'critical' ? <Zap className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                    {engine.status}
                  </span>
                </td>
                <td className="p-3 font-mono text-slate-300">{engine.rul} cycles</td>
                <td className="p-3 text-slate-400 text-sm">{engine.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenanceQueue;
