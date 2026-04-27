const generateTimeData = (cycleCount, baseRul) => {
  const data = [];
  const predictRul = [];
  
  for (let i = 0; i < cycleCount; i++) {
    // Simulate real values converging to an eventual failure
    const actual = baseRul - i;
    // Model prediction (adds some noise)
    const noise = (Math.random() - 0.5) * 5;
    const predicted = Math.max(0, actual + noise);
    
    predictRul.push({
      cycle: i + 1,
      actualRul: actual,
      predictedRul: Math.round(predicted)
    });
    
    // Simulate sensors
    data.push({
      cycle: i + 1,
      s1: 518.67 + (Math.random() * 2),
      s2: 642.15 + (Math.random() * 5) + (i * 0.05), // Degrading
      s3: 1589.7 + (Math.random() * 15) + (i * 0.2), // Degrading
      s4: 1400.2 + (Math.random() * 15) + (i * 0.15),
    });
  }
  
  return { sensorData: data, predictRul };
};

export const getMockEngineData = (engineId) => {
  // Hash engineId to generate consistent properties
  const isCritical = parseInt(engineId) % 5 === 0;
  const isWarning = parseInt(engineId) % 3 === 0 && !isCritical;
  
  let rul = 120 + Math.floor(Math.random() * 50);
  let health_status = "healthy";
  let anomalies = [];
  let alerts = [];
  
  if (isCritical) {
    rul = Math.floor(Math.random() * 15) + 1;
    health_status = "critical";
    anomalies = [
        "Sensor 2 abnormal spike detected",
        "High pressure variance"
    ];
    alerts = [
        `Engine ${engineId} predicted to fail in ${rul} cycles`,
        "Immediate maintenance required!"
    ];
  } else if (isWarning) {
    rul = 20 + Math.floor(Math.random() * 30);
    health_status = "warning";
    anomalies = ["Temperature standard deviation increasing"];
    alerts = [`Schedule inspection for Engine ${engineId} within ${rul} cycles`];
  }
  
  const currentCycle = Math.floor(Math.random() * 150) + 50;
  // History up to current cycle
  const { sensorData, predictRul } = generateTimeData(currentCycle, rul + currentCycle);

  return {
    id: engineId,
    rul,
    currentCycle,
    health_status,
    sensors: sensorData,
    predicted_vs_actual: predictRul,
    anomalies,
    alerts,
    feature_importance: [
      { name: "Sensor 2", value: 85 },
      { name: "Sensor 3", value: 72 },
      { name: "Sensor 4", value: 65 },
      { name: "Sensor 1", value: 15 },
      { name: "Setting 1", value: 10 },
    ]
  };
};

// Global dashboard stats
export const getDashboardSummary = () => {
    // Generate the specific 10 critical engines and 15 warning engines
    const criticalEngines = Array.from({ length: 10 }, (_, i) => {
        const id = (i * 5) + 5; // e.g. 5, 10, 15...
        return {
            id: id,
            status: 'critical',
            rul: Math.floor(Math.random() * 10) + 1,
            reason: `Sensor 2 & 4 severe degradation. Predicted failure in < 15 cycles.`
        };
    });

    const warningEngines = Array.from({ length: 15 }, (_, i) => {
        const id = (i * 3) + 3; // e.g. 3, 6, 9... (skipping overlap conceptually for demo)
        return {
            id: id + (id % 5 === 0 ? 1 : 0), // avoid overlapping with critical
            status: 'warning',
            rul: 20 + Math.floor(Math.random() * 20),
            reason: `High pressure variance detected. Maintenance recommended soon.`
        };
    });

    return {
        total_engines: 100,
        healthy: 75,
        warning: 15,
        critical: 10,
        avg_rul: 95,
        critical_list: criticalEngines,
        warning_list: warningEngines
    };
};
