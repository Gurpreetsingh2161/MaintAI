# 🏭 AI4I 2020 Predictive Maintenance Dataset — Complete Overview

## 📌 Introduction

The **AI4I 2020 Predictive Maintenance Dataset** is a synthetic dataset designed to simulate real-world industrial machine behavior. It is widely used for building machine learning models that predict equipment failures.

This dataset is ideal for beginners because:

* It is **clean and well-structured**
* Contains **labeled failure data**
* Supports **classification problems**

---

# 📊 Dataset Summary

| Feature        | Value           |
| -------------- | --------------- |
| Total Rows     | ~10,000         |
| Type           | Tabular         |
| Problem Type   | Classification  |
| Missing Values | None            |
| Target         | Machine Failure |

---

# 📁 Column Description

Each row represents a **single observation of a machine at a given time**.

---

## 🔹 1. UDI (Unique Identifier)

* Unique ID for each record
* No predictive value
* Used only for indexing

---

## 🔹 2. Product ID

* Format: (Type + Number)
* Example: L47181, M20345
* Encodes machine category

---

## 🔹 3. Type (Machine Type)

* Categories:

  * L (Low)
  * M (Medium)
  * H (High)

### 📌 Importance:

* Represents machine quality/grade
* Different types have different failure behavior

---

## 🔹 4. Air Temperature [K]

* Temperature of surrounding environment

### 📌 Importance:

* High air temperature → increases risk of overheating
* Affects cooling efficiency

---

## 🔹 5. Process Temperature [K]

* Internal operating temperature of the machine

### 📌 Importance:

* Higher than air temperature
* Direct indicator of thermal stress

---

## 🔹 6. Rotational Speed [rpm]

* Speed at which machine rotates

### 📌 Importance:

* High RPM → higher wear and stress
* Low RPM → possible inefficiency

---

## 🔹 7. Torque [Nm]

* Force applied during operation

### 📌 Importance:

* High torque → mechanical strain
* Key factor in power-related failures

---

## 🔹 8. Tool Wear [min]

* Duration of tool usage

### 📌 Importance:

* One of the **strongest predictors**
* More wear → higher probability of failure

---

# 🎯 Target Variables

## 🔴 9. Machine Failure (Main Target)

* Binary:

  * 0 → No failure
  * 1 → Failure occurred

---

## ⚠️ 10–14. Failure Types

These columns indicate **specific reasons for failure**:

| Code | Meaning                  | Description                 |
| ---- | ------------------------ | --------------------------- |
| TWF  | Tool Wear Failure        | Tool exceeded wear limit    |
| HDF  | Heat Dissipation Failure | Cooling system failed       |
| PWF  | Power Failure            | Insufficient/unstable power |
| OSF  | Overstrain Failure       | Mechanical overload         |
| RNF  | Random Failure           | Unexpected/random issue     |

### 📌 Important Note:

* If **Machine Failure = 1**, one of these failure types will be 1
* Otherwise, all are 0

---

# ⚙️ Feature Understanding (Core Insight)

## 🔥 Thermal Features

* Air Temperature
* Process Temperature

👉 Used to detect **overheating problems**

---

## ⚙️ Mechanical Features

* Rotational Speed
* Torque

👉 Indicate **load and stress**

---

## 🛠️ Degradation Feature

* Tool Wear

👉 Represents **aging of machine**

---

## 🏷️ Categorical Feature

* Type

👉 Captures **machine variation**

---

# 🧠 How Failures Are Generated (Very Important Insight)

The dataset is not random — failures follow **logical rules**:

### 1. Tool Wear Failure (TWF)

* Occurs when tool wear exceeds threshold

### 2. Heat Dissipation Failure (HDF)

* Triggered when:

  * Process temp − Air temp is too high

### 3. Power Failure (PWF)

* Based on:

  * Torque × Speed (power demand)

### 4. Overstrain Failure (OSF)

* Caused by excessive torque under wear conditions

### 5. Random Failure (RNF)

* Small probability (noise)

---

# 📈 What You Can Do With This Dataset

## ✅ Problem Type

* Binary Classification
* Multi-class Classification (failure types)

---

## ✅ Possible Models

* Logistic Regression
* Decision Tree
* Random Forest
* XGBoost
* Neural Networks (optional)

---

## ✅ Typical Workflow

1. Data Loading
2. Exploratory Data Analysis (EDA)
3. Feature Engineering
4. Model Training
5. Evaluation (Accuracy, F1-score)

---

# ⚠️ Important Observations

* Dataset is **imbalanced** (failures are rare)
* Tool wear is highly influential
* Thermal difference is critical
* Some features are correlated

---

# 🚀 Why This Dataset is Great

* Beginner-friendly
* Real-world inspired
* Clean (no missing values)
* Easy to visualize
* Fast to train models

---

# 📌 Final Summary

* Goal → Predict machine failure
* Inputs → Temperature, speed, torque, wear
* Output → Failure (Yes/No + Type)

This dataset helps build intuition about:
✔ Machine degradation
✔ Failure patterns
✔ Predictive maintenance systems

---
