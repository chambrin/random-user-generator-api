
            export async function GET(request: Request, res: Response) {
                const data = {"id": 6, "name": "Jean Raymond du Lagarde", "email": "auroreschmitt@example.net", "username": "claudinebuisson", "job": "consultant", "gender": "Homme", "phone_number": "+33 (0)5 08 50 72 28", "website": "http://www.mace.fr/", "address": "7, chemin de Morel, 55457 MercierVille", "birthdate": "1978-07-20", "age": 45, "interests": ["Voyages", "Cuisine", "Animaux", "Lecture", "Art", "Sport", "Photo", "Cin\u00e9ma", "Technologie"], "user_image_url": "/random_avatar/user_6.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                