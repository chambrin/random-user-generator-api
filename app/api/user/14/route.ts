
            export async function GET(request: Request, res: Response) {
                const data = {"id": 14, "name": "Alex Pasquier", "email": "anais26@example.com", "username": "olivie24", "job": "horticulteur", "gender": "Homme", "phone_number": "+33 (0)2 36 09 65 71", "website": "http://www.bouchet.net/", "address": "38, chemin Meunier, 47263 Lemoinedan", "birthdate": "1953-02-15", "age": 70, "interests": ["Lecture", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_14.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                