# MaintAI — Predictive Maintenance with AI4I 2020 Dataset

MaintAI is a small end‑to‑end project built around the **AI4I 2020 Predictive Maintenance Dataset**. It focuses on:

- Exploratory Data Analysis (EDA) with clear, business‑oriented insights
- Baseline classification models for predicting machine failure
- Comparison of several classical ML models (Logistic Regression, Naive Bayes, Decision Tree, SVM, Random Forest, XGBoost)
- Advanced, non–deep‑learning techniques to handle **class imbalance** and **model tuning** (SMOTE, feature selection, XGBoost hyperparameter search)

The core work happens in a Jupyter notebook that demonstrates the full workflow from raw data to actionable maintenance insights.

---

## Project Structure

- `AzureDs/ai4i_eda_and_first_model.ipynb` — Main notebook with EDA, baseline models, model comparisons, and advanced techniques
- `data/ai4i2020.csv` — AI4I 2020 dataset (CSV). Required for running the notebook
- `DatasetExplanation/` — Additional notes/background about the dataset
- `Notes/` — Project notes and ideas for future extensions
- `venv/` or `maintai_env/` — Local Python environments (not needed when cloning; **do not commit**)
- `ProjectPlan.md` — High‑level plan and notes for the project

---

## Requirements

You need:

- Python **3.9+** (3.10 recommended)
- Git
- A virtual environment tool (any of):
  - `venv` (built‑in)
  - or **conda** / **mamba**
- Recommended packages (installed via `pip`):
  - `jupyter`
  - `pandas`
  - `numpy`
  - `matplotlib`
  - `seaborn`
  - `scikit-learn`
  - `xgboost`
  - `imbalanced-learn`

> Note: The `maintai_env` folder is the author’s local environment and is **not** required to run the project. Anyone cloning the repo should create their own environment using the steps below.

---

## 1. Clone the Repository

```bash
git clone <YOUR_REPO_URL>
cd MaintAI
```

Replace `<YOUR_REPO_URL>` with your actual Git remote URL.

---

## 2. Create and Activate a Virtual Environment

You can use either `venv` (pure Python) or `conda`. Pick **one** of the options below.

### Option A — Using venv (recommended, simple)

```bash
# From the project root
python -m venv venv

# Windows PowerShell
venv\Scripts\Activate.ps1

# Windows cmd
venv\Scripts\activate.bat

# Linux / macOS (if used)
source venv/bin/activate
```

### Option B — Using conda

```bash
conda create -n maintai_env python=3.10 -y
conda activate maintai_env
```

---

## 3. Install Python Dependencies

With the virtual environment **activated**, install required packages:

```bash
pip install --upgrade pip
pip install jupyter pandas numpy matplotlib seaborn scikit-learn xgboost imbalanced-learn
```

Optionally, you can freeze the environment to a `requirements.txt` for reproducibility:

```bash
pip freeze > requirements.txt
```

(If a `requirements.txt` is present in the repo later, you can instead run `pip install -r requirements.txt`.)

---

## 4. Make Sure the Dataset Is Available

The notebook expects the AI4I CSV at:

- `data/ai4i2020.csv`

If you don’t have it yet:

1. Download the **AI4I 2020 Predictive Maintenance Dataset** from its official source (e.g., UCI / Kaggle / Azure Open Datasets, depending on your usage).
2. Save the file as `ai4i2020.csv` inside the `data/` folder so that the final path is:

```text
MaintAI/
  data/
    ai4i2020.csv
```

---

## 5. Run the Notebook

1. From the project root (with the virtual environment still activated):

   ```bash
   jupyter notebook
   ```

2. In the Jupyter UI, navigate to:

   - `AzureDs/ai4i_eda_and_first_model.ipynb`

3. Open the notebook and run the cells in order:

   - Sections for EDA and insights
   - Baseline Logistic Regression model
   - Comparisons of classical models (Naive Bayes, Decision Tree, SVM, Random Forest, XGBoost)
   - Advanced techniques (hyperparameter tuning, SMOTE, feature selection)

Some of the advanced cells (especially XGBoost hyperparameter search and SMOTE pipelines) can be **computationally heavy**. If you are on a limited machine, you can:

- Skip these cells on the first run
- Or reduce `n_estimators`, CV folds, or `n_iter` values inside the notebook

---

## 6. Project Goals and Extensions

Current goals:

- Understand key drivers of machine failure (tool wear, thermal stress, etc.)
- Build interpretable baselines and compare to more flexible models
- Explore techniques to improve recall for the failure class while keeping precision reasonable

Potential future extensions:

- Add a streamlined API or CLI for batch scoring new data
- Log experiments and model performance with MLflow or a similar tool
- Deploy the best model as a lightweight service (e.g., FastAPI)
- Add more robust cross‑validation and model selection logic

---

## Notes for Collaborators

- **Do not commit local environments** like `venv/` or `maintai_env/`. These should be listed in `.gitignore`.
- If you add new dependencies, remember to:
  - Update `requirements.txt` (or an `environment.yml` if using conda)
  - Mention the change briefly in this README under *Requirements*

This keeps the repository clean and makes it easy for others to recreate the environment from scratch.
