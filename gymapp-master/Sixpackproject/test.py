import requests

# URL base
base_url = "http://localhost:5000"

# 1. Salvare i dati
save_data = {
    "user_id": "CA311",
    "page_id": "workout1",
    "data": [1, 2, 3]
}

response = requests.post(f"{base_url}/save", json=save_data)
print("Salvare i dati:", response.json())

# 2. Caricare i dati
load_response = requests.get(f"{base_url}/load", params={"user_id": "CA311", "page_id": "workout1"})
print("Caricare i dati:", load_response.json())

# 3. Resettare i dati
reset_response = requests.get(f"{base_url}/reset", params={"user_id": "CA311", "page_id": "workout1"})
print("Resettare i dati:", reset_response.json())