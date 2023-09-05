
            export async function GET(request: Request, res: Response) {
                const data = {"id": 15, "name": "Agn\u00e8s Garnier", "email": "bertrand61@example.net", "username": "noemi26", "job": "anatomiste", "gender": "Femme", "phone_number": "+33 (0)3 57 55 44 14", "website": "http://aubry.fr/", "address": "avenue Duval, 32407 Joseph", "birthdate": "1968-12-20", "age": 54, "interests": ["Cin\u00e9ma", "Lecture", "Photo", "Animaux"], "user_image_url": "/random_avatar/user_15.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                