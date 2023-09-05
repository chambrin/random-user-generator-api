
            export async function GET(request: Request, res: Response) {
                const data = {"id": 34, "name": "Tristan Valette", "email": "mailletnicole@example.net", "username": "dtecher", "job": "commissaire-priseur", "gender": "Femme", "phone_number": "+33 (0)4 42 17 14 78", "website": "https://lacroix.com/", "address": "722, chemin Ad\u00e8le Perret, 84245 Martineau", "birthdate": "2002-08-07", "age": 21, "interests": ["Lecture", "Musique"], "user_image_url": "/random_avatar/user_34.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                