import React from 'react';
import { Info, BarChart2, PieChart, Activity, HelpCircle } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="col-span-full max-w-5xl space-y-6">
      
      {/* Intro Header */}
      <div className="glass-panel p-8">
        <div className="flex items-center mb-4">
          <HelpCircle className="w-8 h-8 text-cyan-400 mr-4" />
          <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-widest">Dashboard Documentation</h2>
        </div>
        <p className="text-slate-400 leading-relaxed mb-4 text-sm">
          Welcome to the TurboSphere Predictive Maintenance interface. This system is designed to provide real-time condition monitoring 
          for industrial turbofan engines, backed by extreme gradient boosting (XGBoost) logic.
        </p>
        <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg flex items-start">
          <Info className="w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-300">
            <strong className="text-slate-200">A Note on Live Data:</strong> In this interactive environment, the values plotted in the curves (Remaining Useful Life and Sensor readings) fluctuate dynamically to simulate real-time degradation. However, the exact number of engines categorized as "Warning" and "Critical" at the top of the screen remains static to provide a consistent queue for demonstration. In a live production system, engines would transition through these lifecycle states, meaning these quantities would actively increase or decrease.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* RUL Gauge */}
        <div className="glass-panel p-6 border-t-2 border-t-emerald-400">
          <div className="flex items-center mb-4 text-emerald-400">
            <PieChart className="w-5 h-5 mr-3" />
            <h3 className="font-bold uppercase tracking-wider text-sm">1. RUL Gauge Chart</h3>
          </div>
          <p className="text-slate-300 text-sm mb-3">
            <strong>Location:</strong> Main Overview Panel <br/>
            <strong>Type:</strong> Radial Progress / Donut Chart
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This visually breaks down the Reliability Index of the currently selected engine. It scales the current simulated 
            Remaining Useful Life (RUL) against an assumed maximum lifespan (e.g., 200 cycles). The green section represents 
            consumed life, giving operators an instinctual, quick-glance view of how close an engine is to mechanical failure.
          </p>
        </div>

        {/* Feature Contribution */}
        <div className="glass-panel p-6 border-t-2 border-t-sky-400">
          <div className="flex items-center mb-4 text-sky-400">
            <BarChart2 className="w-5 h-5 mr-3" />
            <h3 className="font-bold uppercase tracking-wider text-sm">2. Feature Contribution</h3>
          </div>
          <p className="text-slate-300 text-sm mb-3">
            <strong>Location:</strong> Feature Importance Bar Chart <br/>
            <strong>Type:</strong> Horizontal Layout Bar Chart
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This extracts logic from the underlying model to explain <em>why</em> it arrived at its RUL prediction. In the Turbofan dataset, 
            Sensor 2 and Sensor 3 historically possess the highest correlation with failure. This specific chart proves to an engineer that 
            if the predictive model decrees an engine to be "Critical", it was because Sensor 2 was the heaviest driving force behind that algorithmic decision.
          </p>
        </div>

        {/* Degradation Curve */}
        <div className="glass-panel p-6 border-t-2 border-t-rose-400 md:col-span-2">
          <div className="flex items-center mb-4 text-rose-400">
            <Activity className="w-5 h-5 mr-3" />
            <h3 className="font-bold uppercase tracking-wider text-sm">3. Degradation Curve Overlay</h3>
          </div>
          <p className="text-slate-300 text-sm mb-3">
            <strong>Location:</strong> Predictions Tab <br/>
            <strong>Type:</strong> Dual Area Overlay Chart
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            This is the most critical predictive tool, comparing the actual degradation footprint against the XGBoost model's estimation. 
            The solid green area tracks the <strong>Actual RUL</strong> observed, while the dashed red area tracks the <strong>Predicted RUL</strong> 
            real-time forecast. When the red overlay runs parallel to the green footprint, the ML model is accurate. Large divergence warns 
            the operator that aberrant sensor behavior is rendering the machine learning estimation uncertain.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Documentation;
