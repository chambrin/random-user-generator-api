import os
import requests
import faker
import json
from datetime import datetime
from tqdm import tqdm
import random
import uuid

def save_image(image_url, image_path):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(image_path, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
    else:
        print(f"Unable to download image at {image_url}.")

def calculate_age(birthdate):
    today = datetime.today()
    return today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))

if __name__ == "__main__":
    num_users = 40  # CHOISIR le nombre d'utilisateurs à générer.

    image_folder_path = "./random_people"  # DOSSIER pour stocker les images.
    os.makedirs(image_folder_path, exist_ok=True)

    root_data_folder = "data"  # DOSSIER RACINE pour stocker les données.
    os.makedirs(root_data_folder, exist_ok=True)

    fake = faker.Faker('fr_FR')  # Générer des détails d'utilisateur en français.

    possible_interests = ["Sport", "Musique", "Cuisine", "Lecture", "Voyages", "Photo", "Art", "Technologie", "Cinéma", "Animaux"]
    global_users = []

    for i in tqdm(range(num_users)):
        birthdate = fake.date_of_birth(minimum_age=20, maximum_age=70)  # Générer une date de naissance.
        user = {
            "id": uuid.uuid4().hex,  # Générer un ID unique.
            "name": fake.name(),
            "email": fake.email(),
            "username": fake.user_name(),
            "job": fake.job(),
            "gender": random.choice(["Homme", "Femme"]),
            "phone_number": fake.phone_number(),
            "website": fake.url(),
            "address": fake.address().replace('\n', ', '),
            "birthdate": birthdate.isoformat(),
            "age": calculate_age(birthdate),
            "interests": random.sample(possible_interests, k=random.randint(1, len(possible_interests))),
            "user_image_url": "https://thispersondoesnotexist.com/",
            "background_image_url": "https://source.unsplash.com/random/1920x1080"
        }

        global_users.append(user)
        user_data_folder = os.path.join(root_data_folder, user["id"])
        os.makedirs(user_data_folder, exist_ok=True)

        # Download image
        image_filename = f"user_{user['id']}.png"
        image_path = os.path.join(image_folder_path, image_filename)
        save_image(user["user_image_url"], image_path)

        # Save the image path to the user object
        user["user_image_path"] = image_path

        # Save the object to the JSON file.
        with open(os.path.join(user_data_folder, "user.json"), 'w') as file:
            json.dump(user, file, ensure_ascii=False, indent=4)

    # Save global users to a JSON file
    with open("users.json", 'w') as file:
        json.dump(global_users, file, ensure_ascii=False, indent=4)