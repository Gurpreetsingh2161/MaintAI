import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SensorMonitor = ({ data }) => {
  const [activeSensors, setActiveSensors] = useState({
    s1: true,
    s2: true,
    s3: false,
    s4: false
  });

  const toggleSensor = (sensor) => {
    setActiveSensors(prev => ({ ...prev, [sensor]: !prev[sensor] }));
  };

  const colors = {
    s1: '#34d399',
    s2: '#38bdf8',
    s3: '#a78bfa',
    s4: '#f472b6'
  };

  return (
    <div className="glass-panel p-6 col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest">Sensor Telemetry</h3>
        <div className="flex space-x-2">
          {Object.keys(activeSensors).map(s => (
            <button
              key={s}
              onClick={() => toggleSensor(s)}
              className={`px-3 py-1 rounded text-xs font-bold uppercase transition-colors border ${
                activeSensors[s] 
                ? 'bg-slate-700 text-white' 
                : 'bg-transparent text-slate-500 border-slate-700'
              }`}
              style={{ borderColor: activeSensors[s] ? colors[s] : '' }}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.sensors}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="cycle" stroke="#475569" tick={{fill: '#94a3b8'}} tickMargin={10} minTickGap={30}/>
            <YAxis stroke="#475569" tick={{fill: '#94a3b8'}} domain={['auto', 'auto']} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            {Object.keys(activeSensors).map(s => (
               activeSensors[s] && (
                 <Line key={s} type="monotone" dataKey={s} stroke={colors[s]} strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
               )
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SensorMonitor;
