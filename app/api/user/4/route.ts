
            export async function GET(request: Request, res: Response) {
                const data = {"id": 4, "name": "Isabelle Clerc", "email": "fboucher@example.net", "username": "yhuet", "job": "biblioth\u00e9caire", "gender": "Femme", "phone_number": "+33 (0)4 76 13 49 70", "website": "http://dufour.com/", "address": "rue de Fabre, 90167 Vidal-la-For\u00eat", "birthdate": "1995-10-16", "age": 27, "interests": ["Cuisine", "Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                