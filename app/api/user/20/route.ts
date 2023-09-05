
            export async function GET(request: Request, res: Response) {
                const data = {"id": 20, "name": "Sylvie Bernier", "email": "margot88@example.org", "username": "merlefranck", "job": "architecte naval", "gender": "Femme", "phone_number": "0160003588", "website": "https://pottier.fr/", "address": "60, avenue de Olivier, 10137 Lebrun", "birthdate": "1953-05-01", "age": 70, "interests": ["Voyages", "Photo", "Sport", "Cuisine", "Art", "Musique", "Lecture"], "user_image_url": "/random_avatar/user_20.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                