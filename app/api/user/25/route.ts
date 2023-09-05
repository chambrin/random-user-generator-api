
            export async function GET(request: Request, res: Response) {
                const data = {"id": 25, "name": "Astrid Monnier", "email": "stephaniegodard@example.com", "username": "thibautmaillet", "job": "c\u00e9ramiste", "gender": "Homme", "phone_number": "04 42 89 32 00", "website": "https://www.hardy.fr/", "address": "chemin Bigot, 76375 Voisin-les-Bains", "birthdate": "1971-11-25", "age": 51, "interests": ["Animaux", "Photo", "Musique", "Cuisine", "Voyages", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_25.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                