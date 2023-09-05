
            export async function GET(request: Request, res: Response) {
                const data = {"id": 38, "name": "Matthieu Maillot", "email": "lorraine69@example.org", "username": "michellelegros", "job": "\u00e9conomiste de la construction", "gender": "Homme", "phone_number": "03 87 12 29 92", "website": "https://bertin.com/", "address": "42, avenue de Bertrand, 19457 Chauveau-sur-Mer", "birthdate": "1977-02-27", "age": 46, "interests": ["Art", "Photo", "Lecture", "Sport", "Musique", "Technologie", "Animaux", "Cin\u00e9ma", "Voyages", "Cuisine"], "user_image_url": "/random_avatar/user_38.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                