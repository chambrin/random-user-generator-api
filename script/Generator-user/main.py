import os
import requests
import faker
import json
from datetime import datetime
from tqdm import tqdm
import random
from pathlib import Path

#  permet de sauvegarder une image à partir d'une URL
def save_image(image_url, image_path):
    response = requests.get(image_url, stream=True)
    if response.status_code == 200:
        with open(image_path, 'wb') as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
    else:
        print(f"Unable to download image at {image_url}.")

# calcule l'âge d'une personne à partir de sa date de naissance.
def calculate_age(birthdate):
    today = datetime.today()
    return today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))


if __name__ == "__main__":
    num_users = 40  # Choisir le nombre de user

    image_folder_path = "../../public/random_avatar"  # Folder de stockage des images
    os.makedirs(image_folder_path, exist_ok=True)

    root_data_folder = "data"  # Stockage plus utile
    os.makedirs(root_data_folder, exist_ok=True)

    fake = faker.Faker('fr_FR')  # Generate user details in French par faker

    possible_interests = ["Sport", "Musique", "Cuisine", "Lecture", "Voyages", "Photo", "Art", "Technologie", "Cinéma",
                          "Animaux"]
    global_users = []

    for i in tqdm(range(num_users), colour='blue'):
        birthdate = fake.date_of_birth(minimum_age=20, maximum_age=70)  # cree birthdate
        user_image_filename = f"user_{i + 1}.png"
        user_image_path = os.path.join(image_folder_path, user_image_filename)

        # Download and save image
        save_image("https://thispersondoesnotexist.com", user_image_path)

        user = {
            "id": i + 1,
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
            "user_image_url": f"/random_avatar/{user_image_filename}",
            "background_image_url": "https://source.unsplash.com/random/1920x1080"
        }

        # Add user to global list
        global_users.append(user)

        # api endpoint file pour chaque user
        filename = "route.ts"
        filepath = Path(f"../../app/api/user/{user['id']}") / filename

        # Create api directory if not exists
        if not os.path.exists(filepath.parent):
            os.makedirs(filepath.parent)

            # Create and write to the API endpoint file
            with open(filepath, "w") as file:
                file.write(f"""
            export async function GET(request: Request, res: Response) {{
                const data = {json.dumps(user)};

                return new Response(JSON.stringify(data), {{
                    status: 200,
                    headers: {{
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }},
                }});
            }}
                """)

        # Creation route.ts pour tout les users
        all_filepath = Path(f"../../app/api/user/all") / filename  # Path for all users
        if not os.path.exists(all_filepath.parent):
            os.makedirs(all_filepath.parent)
        # Create and write to the API endpoint file
        with open(all_filepath, "w") as file:
            file.write(f"""
            export async function GET(request: Request, res: Response) {{
            const data = {json.dumps(global_users)};
            return new Response(JSON.stringify(data), {{
                    status: 200,
                    headers: {{
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    }},
                }});
        }}
            """)
