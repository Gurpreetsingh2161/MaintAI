import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const FeatureImportance = ({ data }) => {
  return (
    <div className="glass-panel p-6">
      <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest mb-6">Feature Contribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.feature_importance} layout="vertical">
            <XAxis type="number" stroke="#475569" tick={{fill: '#94a3b8'}} hide />
            <YAxis type="category" dataKey="name" stroke="#475569" tick={{fill: '#94a3b8'}} width={80} />
            <Tooltip 
              cursor={{fill: '#1e293b'}}
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.feature_importance.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#38bdf8' : '#334155'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FeatureImportance;
