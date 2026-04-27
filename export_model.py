import pandas as pd
import numpy as np
import xgboost as xgb
import pickle
import os

print("Exporting XGBoost model to pkl...")

# Data paths
data_dir = r"d:\Javed\MaintAI\data\CMAPSSData"
train_path = os.path.join(data_dir, "train_FD001.txt")

# Columns definition
index_names = ['engine_id', 'cycle']
setting_names = ['setting_1', 'setting_2', 'setting_3']
sensor_names = [f's{i}' for i in range(1, 22)]
col_names = index_names + setting_names + sensor_names

# Read data
train_df = pd.read_csv(train_path, sep='\s+', header=None, names=col_names)

# Calculate RUL
# RUL is the maximum cycles for each engine_id minus their current cycle
max_cycles = train_df.groupby('engine_id')['cycle'].max()
train_df['max_cycle'] = train_df['engine_id'].map(max_cycles)
train_df['RUL'] = train_df['max_cycle'] - train_df['cycle']

# Prepare features and target
features = sensor_names + setting_names
X_train = train_df[features]
y_train = train_df['RUL']

# Train XGBoost
print("Training model...")
model = xgb.XGBRegressor(n_estimators=100, max_depth=5, learning_rate=0.1, random_state=42)
model.fit(X_train, y_train)

# Export the model
out_path = r"d:\Javed\MaintAI\xgboost_model.pkl"
with open(out_path, 'wb') as f:
    pickle.dump(model, f)

print(f"Model saved successfully to {out_path}")
