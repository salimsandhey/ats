import json

with open("ats_data.json", "r") as f:
    data = json.load(f)

# Clean implemented data
implemented = []
last_state = ""
for item in data["implemented"]:
    # Skip rows that are completely NaN (except for FACILITY which might be there)
    if not isinstance(item.get("Automated Testing Station (ATS)"), str) and \
       not isinstance(item.get("DISTRICT"), str) and \
       not isinstance(item.get("STATE"), str):
        continue
    
    # Handle merging facility rows if needed, but let's just keep the main ones
    if isinstance(item.get("Automated Testing Station (ATS)"), str):
        name = item["Automated Testing Station (ATS)"].strip()
        district = item.get("DISTRICT", "").strip() if isinstance(item.get("DISTRICT"), str) else ""
        state = item.get("STATE", "").strip() if isinstance(item.get("STATE"), str) else last_state
        if state:
            last_state = state
        
        status = item.get("ATS Status", "").strip()
        op_status = item.get("ATS Operational Status", "").strip()
        
        implemented.append({
            "name": name,
            "district": district,
            "state": state,
            "status": "Implemented",
            "operational_status": op_status if op_status else status
        })

# Clean under development data
under_development = []
for item in data["under_development"]:
    if not isinstance(item.get("Outlet"), str):
        continue
    
    name = item["Outlet"].strip()
    state = item.get("State ", "").strip() if isinstance(item.get("State "), str) else ""
    city = item.get("City", "").strip() if isinstance(item.get("City"), str) else ""
    status = item.get("Status", "").strip()
    
    under_development.append({
        "name": name,
        "district": city,
        "state": state,
        "status": "Under Development",
        "operational_status": status
    })

combined = implemented + under_development

with open("ats_centers_clean.json", "w") as f:
    json.dump(combined, f, indent=2)

print(f"Cleaned {len(combined)} centers.")
