
            export async function GET(request: Request, res: Response) {
                const data = {"id": 3, "name": "Bertrand Meunier", "email": "lerouxantoinette@example.org", "username": "allardfrancois", "job": "accessoiriste", "gender": "Homme", "phone_number": "04 32 09 04 41", "website": "http://lombard.net/", "address": "755, avenue de Renard, 54220 Sainte Marine", "birthdate": "1977-08-05", "age": 46, "interests": ["Art", "Technologie", "Lecture"], "user_image_url": "/random_avatar/user_3.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                