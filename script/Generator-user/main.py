import os
import requests
import faker
import json
from datetime import datetime
from tqdm import tqdm
import random
from pathlib import Path

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
    num_users = 40  # Choose the number of users to generate.

    image_folder_path = "./random_people"  # Folder to store images.
    os.makedirs(image_folder_path, exist_ok=True)

    root_data_folder = "data"  # Root folder to store data.
    os.makedirs(root_data_folder, exist_ok=True)

    fake = faker.Faker('fr_FR')  # Generate user details in French.

    possible_interests = ["Sport", "Musique", "Cuisine", "Lecture", "Voyages", "Photo", "Art", "Technologie", "Cinéma", "Animaux"]
    global_users = []

    for i in tqdm(range(num_users)):
        birthdate = fake.date_of_birth(minimum_age=20, maximum_age=70)  # Generate a birthdate.
        user = {
            "id": i+1,
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

        # Add user to global list
        global_users.append(user)

        # Prepare path for api endpoint file
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

        # Download image
        image_filename = f"user_{user['id']}.png"
        image_path = os.path.join(image_folder_path, image_filename)
        save_image(user["user_image_url"], image_path)

        # Save the image path to the user object
        user["user_image_path"] = image_path

        # File with all users.
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
