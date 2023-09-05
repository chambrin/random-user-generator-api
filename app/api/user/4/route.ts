
            export async function GET(request: Request, res: Response) {
                const data = {"id": 4, "name": "Hugues Buisson", "email": "lbarbe@example.org", "username": "albertsuzanne", "job": "rudologue", "gender": "Femme", "phone_number": "+33 (0)4 65 73 33 91", "website": "http://philippe.com/", "address": "815, chemin Dias, 30167 Morvan-la-For\u00eat", "birthdate": "1979-10-13", "age": 43, "interests": ["Art", "Musique", "Cin\u00e9ma", "Voyages", "Sport", "Photo"], "user_image_url": "/random_avatar/user_4.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                