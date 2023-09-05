
            export async function GET(request: Request, res: Response) {
                const data = {"id": 10, "name": "Th\u00e9ophile Torres Le Imbert", "email": "rogermillet@example.org", "username": "thierry53", "job": "gestionnaire de patrimoine", "gender": "Femme", "phone_number": "0470028726", "website": "http://rey.fr/", "address": "59, chemin Maurice, 53196 Marchal", "birthdate": "1989-10-31", "age": 33, "interests": ["Animaux", "Cin\u00e9ma", "Art", "Photo", "Voyages", "Lecture"], "user_image_url": "/random_avatar/user_10.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                