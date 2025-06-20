import requests

def pet_id():
    response = requests.get("https://petstore.swagger.io/v2/pet/5")
    print("Código de estado:", response.status_code)
    print("Respuesta:", response.text)
    assert response.status_code == 200

pet_id()
