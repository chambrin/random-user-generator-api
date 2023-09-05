
            export async function GET(request: Request, res: Response) {
                const data = {"id": 19, "name": "Arthur Pires Le Pasquier", "email": "xandre@example.com", "username": "wleroy", "job": "tapissier d'ameublement", "gender": "Femme", "phone_number": "04 78 53 25 42", "website": "https://clement.fr/", "address": "71, chemin Payet, 70720 Royer-sur-Thomas", "birthdate": "1970-02-11", "age": 53, "interests": ["Art", "Photo", "Musique", "Animaux", "Cuisine", "Voyages", "Lecture", "Sport"], "user_image_url": "/random_avatar/user_19.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    },
                });
            }
                