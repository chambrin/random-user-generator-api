
            export async function GET(request: Request, res: Response) {
                const data = {"id": 21, "name": "Yves Roux", "email": "augustinvoisin@example.org", "username": "madeleine65", "job": "administrateur de mission humanitaire", "gender": "Homme", "phone_number": "+33 5 79 72 45 64", "website": "https://www.barbe.com/", "address": "boulevard Chantal L\u00e9ger, 87484 Fournier", "birthdate": "1987-11-05", "age": 35, "interests": ["Art", "Animaux", "Technologie", "Photo", "Cin\u00e9ma", "Voyages", "Musique", "Sport", "Lecture", "Cuisine"], "user_image_url": "/random_avatar/user_21.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                