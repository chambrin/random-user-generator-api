
            export async function GET(request: Request, res: Response) {
                const data = {"id": 18, "name": "Vincent Michaud", "email": "manon39@example.com", "username": "ibailly", "job": "facteur d'instruments", "gender": "Femme", "phone_number": "+33 1 48 52 58 17", "website": "https://le.net/", "address": "55, avenue de Regnier, 17836 VincentVille", "birthdate": "1962-08-23", "age": 61, "interests": ["Musique", "Photo", "Voyages", "Animaux", "Sport", "Lecture", "Art"], "user_image_url": "/random_avatar/user_18.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                