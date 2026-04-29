import pandas as pd
import json
import os

def extract_excel(file_path):
    try:
        df = pd.read_excel(file_path)
        return df.to_dict(orient='records')
    except Exception as e:
        return str(e)

file1 = "public/ats-centers/List of ATS Statewise as on Feb2026.xlsx"
file2 = "public/ats-centers/State Wise ATS Status by AVL.xlsx"

data1 = extract_excel(file1)
data2 = extract_excel(file2)

output = {
    "implemented": data1,
    "under_development": data2
}

with open("ats_data.json", "w") as f:
    json.dump(output, f, indent=2)

print("Data extracted to ats_data.json")
