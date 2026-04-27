import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SummaryCards from './components/SummaryCards';
import MainOverview from './components/MainOverview';
import SensorMonitor from './components/SensorMonitor';
import PredictionChart from './components/PredictionChart';
import AlertsPanel from './components/AlertsPanel';
import FeatureImportance from './components/FeatureImportance';
import MaintenanceQueue from './components/MaintenanceQueue';
import Documentation from './components/Documentation';
import { getMockEngineData } from './utils/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEngine, setSelectedEngine] = useState('1');
  const [engineData, setEngineData] = useState(null);

  // Simulate real-time data polling
  useEffect(() => {
    const fetchData = () => {
      setEngineData(getMockEngineData(selectedEngine));
    };
    
    // Initial fetch
    fetchData();
    
    // Setup interval for every 2 seconds
    const intervalId = setInterval(fetchData, 2000);
    return () => clearInterval(intervalId);
  }, [selectedEngine]);

  return (
    <div className="flex flex-col md:flex-row bg-[#0b1120] min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 overflow-hidden">
      <Sidebar 
        activeTab={activeTab} setActiveTab={setActiveTab} 
        selectedEngine={selectedEngine} setSelectedEngine={setSelectedEngine} 
      />
      
      <main className="flex-1 p-4 md:p-8 h-screen overflow-y-auto">
        <header className="mb-6 md:mb-8 border-b border-slate-800 pb-4 flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight uppercase">Fleet Dashboard</h1>
            <p className="text-slate-500 uppercase tracking-widest text-sm mt-1 font-semibold">Real-time health monitoring matrix</p>
          </div>
          <div className="flex items-center text-xs tracking-wider uppercase font-bold text-slate-400 mt-4 md:mt-0">
             <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 mr-2 animate-pulse"></div>
             Live Data Feed Active
          </div>
        </header>

        <SummaryCards setActiveTab={setActiveTab} />

        {/* Dashboard Grid Based on Selected Tab */}
        {!engineData ? (
          <div className="flex h-64 items-center justify-center">
             <div className="animate-spin w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full"></div>
             <span className="ml-4 text-slate-400 uppercase tracking-widest font-bold">Initializing Telemetry...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {activeTab === 'about' ? (
              <Documentation />
            ) : (
              <>
                {(activeTab === 'overview' || activeTab === 'sensors') && (
                  <MainOverview data={engineData} />
                )}
                
                {(activeTab === 'overview' || activeTab === 'sensors') && (
                   <SensorMonitor data={engineData} />
                )}

                {(activeTab === 'overview' || activeTab === 'predictions') && (
                   <PredictionChart data={engineData} />
                )}

                {(activeTab === 'overview' || activeTab === 'alerts') && (
                   <AlertsPanel data={engineData} />
                )}

                {(activeTab === 'predictions' || activeTab === 'alerts') && (
                   <FeatureImportance data={engineData} />
                )}

                {activeTab === 'predictions' && (
                   <MaintenanceQueue />
                )}
              </>
            )}
            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
