# MaintAI — Predictive Maintenance & Turbofan Diagnostics Suite

MaintAI is an end-to-end industrial machine learning and visualization workspace. It focuses on predictive modeling and real-time monitoring of heavy machinery. The project unites two major pillars:
1. **Core Data Science**: Predicting machine failures on datasets like the AI4I 2020 Predictive Maintenance Dataset and the NASA Turbofan degradation dataset using XGBoost and advanced balancing techniques.
2. **TurboSphere Dashboard**: A production-grade, responsive React/Vite web application that visualizes algorithmic telemetry logic via a modern, "MindSphere-inspired" UI.

---

## 🛠️ Project Structure

- `frontend/` — **TurboSphere Dashboard**: A React + Vite application mapping XGBoost RUL (Remaining Useful Life) predictions to actionable user interfaces.
- `AzureDs/ai4i_eda_and_first_model.ipynb` — Jupyter notebook housing exploratory data analysis and baseline classification models.
- `NASA_Turbofan/` — Jupyter notebooks containing data preparation and Extreme Gradient Boosting (XGBoost) logic deployed for the Turbofan engines.
- `export_model.py` — Pipeline script handling the ingestion of CMAPSS data and exporting the `xgboost_model.pkl`.
- `data/` — Local directory serving data requirements (e.g. `ai4i2020.csv` and `CMAPSSData`).
- `DatasetExplanation/` & `Notes/` — Documentation on datasets and future roadmap ideas.

---

## 🚀 Pillar 1: Machine Learning Environment

### Requirements
- Python **3.9+** (3.10 recommended)
- `jupyter`, `pandas`, `numpy`, `matplotlib`, `seaborn`, `scikit-learn`, `xgboost`, `imbalanced-learn`

### Setup Instructions
1. **Prepare Virtual Environment**: 
```bash
python -m venv venv
# Activate on Windows:
venv\Scripts\Activate.ps1
# Activate on Mac/Linux:
source venv/bin/activate
```
2. **Install Dependencies**:
```bash
pip install -r requirements.txt # (Or install the packages listed above manually)
```
3. **Run the Notebooks**: Use `jupyter notebook` to execute the EDA or Turbofan XGBoost prediction notebooks. If creating the serialization `.pkl` file, simply run `python export_model.py`.

---

## 🌐 Pillar 2: TurboSphere React Dashboard

The `frontend` features a responsive dark-themed component architecture displaying the ML engine's outputs. It features:
- Critical and Warning action queues.
- Real-time time series charts overlaying actual telemetry vs. model predictions.
- Feature Contribution horizontal bar analysis to establish variable dependencies.

### Running the Dashboard

1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install NodeJS dependencies:
```bash
npm install
```
3. Configure Environment Variables (if binding to a real pipeline API). 
Ensure you define your `.env` following `.env.example`:
```bash
cp .env.example .env
```
4. Start the Local Server:
```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 📱 Responsiveness Features
The TurboSphere Dashboard scales gracefully across standard displays, tablets, and mobile devices:
- Grid grids dynamically adjust from 1 column up to 5 columns.
- The navigation sidebar retracts appropriately during lower viewport thresholds.
- Time-series graphing (Recharts) automatically resizes down within bounding boxes.

---

## 🤝 Contributing
- **Do not commit local environments** (like `venv/` or `/node_modules/`). 
- Maintain unified naming structures between the XGBoost export variables and the frontend's expected API signature.
