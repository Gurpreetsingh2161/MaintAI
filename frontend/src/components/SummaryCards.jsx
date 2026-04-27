import React from 'react';
import { getDashboardSummary } from '../utils/mockData';
import { Activity, CheckCircle, AlertTriangle, Zap, Clock } from 'lucide-react';

const SummaryCards = ({ setActiveTab }) => {
  const summary = getDashboardSummary();

  const cards = [
    { label: 'Total Engines', value: summary.total_engines, icon: Activity, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Healthy', value: summary.healthy, icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { label: 'Warning', value: summary.warning, icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { label: 'Critical', value: summary.critical, icon: Zap, color: 'text-rose-500', bg: 'bg-rose-500/10' },
    { label: 'Avg RUL', value: summary.avg_rul, icon: Clock, color: 'text-cyan-400', bg: 'bg-cyan-400/10', suffix: ' cycles' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const isClickable = card.label === 'Warning' || card.label === 'Critical';
        
        return (
          <div 
            key={i} 
            onClick={() => isClickable && setActiveTab('predictions')}
            className={`glass-panel p-4 flex items-center justify-between ${isClickable ? 'cursor-pointer hover:bg-slate-800/90 hover:border-slate-600 transition-colors' : ''}`}
            title={isClickable ? `Click to view ${card.label} queue` : ''}
          >
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-semibold">{card.label}</p>
              <h3 className="text-2xl font-bold text-slate-100 uppercase">
                {card.value}{card.suffix && <span className="text-sm text-slate-500 ml-1">{card.suffix}</span>}
              </h3>
            </div>
            <div className={`p-3 rounded-lg ${card.bg}`}>
              <Icon className={`w-6 h-6 ${card.color}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
