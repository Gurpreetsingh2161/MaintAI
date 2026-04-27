import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const MainOverview = ({ data }) => {
  if (!data) return null;

  const getHealthColor = () => {
    switch (data.health_status) {
      case 'critical': return '#f43f5e'; // rose-500
      case 'warning': return '#fbbf24';  // amber-400
      default: return '#34d399';         // emerald-400
    }
  };

  const getBgColor = () => {
    switch (data.health_status) {
      case 'critical': return 'bg-rose-500/10 border-rose-500/30';
      case 'warning': return 'bg-amber-400/10 border-amber-400/30';
      default: return 'bg-emerald-400/10 border-emerald-400/30';
    }
  };

  // For the radial progress chart (Mock max RUL is ~200)
  const maxRul = 200; 
  const currentRul = Math.min(data.rul, maxRul);
  const pieData = [
    { name: 'RUL', value: currentRul },
    { name: 'Consumed', value: maxRul - currentRul }
  ];

  return (
    <div className={`glass-panel p-8 flex flex-col md:flex-row items-center justify-between col-span-full border ${getBgColor()}`}>
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-1">Engine ID: {data.id.toString().padStart(3, '0')}</h2>
          <h1 className="text-5xl font-bold tracking-tight text-white uppercase">
            RUL: <span style={{ color: getHealthColor() }}>{data.rul}</span> <span className="text-2xl text-slate-400 font-medium tracking-wide">Cycles</span>
          </h1>
        </div>
        
        <div className="inline-flex items-center space-x-2 bg-slate-900/50 rounded-full px-4 py-2 border border-slate-700/50">
          <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: getHealthColor() }}></div>
          <span className="uppercase text-sm font-semibold tracking-wider text-slate-300">
            Current Status: <span style={{ color: getHealthColor() }}>{data.health_status}</span>
          </span>
        </div>

        <div className="pt-4 flex items-center space-x-6 text-sm text-slate-400 uppercase font-semibold">
           <div>Cycle: <span className="text-slate-200">{data.currentCycle}</span></div>
           <div>Reliability Index: <span className="text-slate-200">{(data.rul / maxRul * 100).toFixed(1)}%</span></div>
        </div>
      </div>

      <div className="w-48 h-48 relative mt-6 md:mt-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              innerRadius={70}
              outerRadius={90}
              startAngle={180}
              endAngle={0}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              cornerRadius={5}
            >
              <Cell fill={getHealthColor()} />
              <Cell fill="#1e293b" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
           <span className="text-3xl font-bold uppercase" style={{ color: getHealthColor() }}>{(data.rul / maxRul * 100).toFixed(0)}%</span>
           <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Health</span>
        </div>
      </div>
    </div>
  );
};

export default MainOverview;
