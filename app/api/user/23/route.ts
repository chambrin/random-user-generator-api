
            export async function GET(request: Request, res: Response) {
                const data = {"id": 23, "name": "Gr\u00e9goire-Jacques Maurice", "email": "dianemarchand@example.com", "username": "de-sousacelina", "job": "manipulateur en \u00e9lectroradiologie m\u00e9dicale", "gender": "Femme", "phone_number": "04 78 78 42 96", "website": "http://www.costa.fr/", "address": "44, rue \u00c9douard Guibert, 06928 Fontaine", "birthdate": "1974-02-13", "age": 49, "interests": ["Technologie", "Musique", "Cuisine", "Animaux", "Sport", "Lecture", "Art", "Photo", "Voyages", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_23.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                