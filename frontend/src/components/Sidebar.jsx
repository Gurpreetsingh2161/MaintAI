import React from 'react';
import { Activity, Thermometer, GitGraph, AlertTriangle, Settings, LayoutDashboard, HelpCircle } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, selectedEngine, setSelectedEngine }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'sensors', label: 'Sensors', icon: Thermometer },
    { id: 'predictions', label: 'Predictions', icon: GitGraph },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
    { id: 'about', label: 'Documentation', icon: HelpCircle },
  ];

  const engines = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="w-full md:w-64 bg-[#0f172a] border-b md:border-b-0 md:border-r border-slate-800 flex flex-col uppercase text-xs tracking-wider z-10 relative">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-900/50 flex-shrink-0">
        <Activity className="w-5 h-5 text-cyan-400 mr-3" />
        <span className="font-bold text-slate-100 uppercase tracking-widest text-sm">TurboSphere</span>
      </div>

      {/* Engine Selection */}
      <div className="p-6">
        <label className="text-slate-500 font-semibold mb-3 block">Selected Engine</label>
        <div className="relative">
          <select 
            value={selectedEngine}
            onChange={(e) => setSelectedEngine(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-4 py-2 appearance-none focus:outline-none focus:border-cyan-500 transition-colors"
          >
            {engines.map(id => (
              <option key={id} value={id}>Engine #{id.toString().padStart(3, '0')}</option>
            ))}
          </select>
          <Settings className="w-4 h-4 text-slate-500 absolute right-3 top-3 pointer-events-none" />
        </div>
      </div>

      {/* Navigation */}
      <div className="px-3 flex-1 flex flex-col overflow-x-auto md:overflow-hidden whitespace-nowrap">
        <label className="text-slate-500 font-semibold mb-3 hidden md:block px-3 mt-4">Monitoring</label>
        <nav className="flex md:block space-x-2 md:space-x-0 md:space-y-1 p-3 md:p-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-cyan-500/10 text-cyan-400 font-medium' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 mr-3 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* Footer Info */}
      <div className="p-6 border-t border-slate-800 text-slate-600 hidden md:block mt-auto">
        <p>System Status: <span className="text-emerald-400">Online</span></p>
        <p className="mt-1">Last Sync: Just now</p>
      </div>
    </div>
  );
};

export default Sidebar;
