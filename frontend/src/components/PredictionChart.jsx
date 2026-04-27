import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PredictionChart = ({ data }) => {
  return (
    <div className="glass-panel p-6">
      <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest mb-6">Degradation Curve (RUL)</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data.predicted_vs_actual}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="cycle" stroke="#475569" tick={{fill: '#94a3b8'}} />
            <YAxis stroke="#475569" tick={{fill: '#94a3b8'}} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Area type="monotone" dataKey="actualRul" stroke="#34d399" fillOpacity={1} fill="url(#colorActual)" name="Actual RUL" />
            <Area type="monotone" dataKey="predictedRul" stroke="#f43f5e" fillOpacity={1} fill="url(#colorPredicted)" name="Predicted RUL" strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PredictionChart;
