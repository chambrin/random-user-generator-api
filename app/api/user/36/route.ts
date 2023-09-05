
            export async function GET(request: Request, res: Response) {
                const data = {"id": 36, "name": "Brigitte Guillaume", "email": "suzannebecker@example.com", "username": "remy38", "job": "ing\u00e9nieur en \u00e9lectronique num\u00e9rique", "gender": "Femme", "phone_number": "+33 (0)3 72 40 79 07", "website": "http://www.aubry.fr/", "address": "65, avenue Louis Bailly, 27837 Leduc-la-For\u00eat", "birthdate": "1989-01-14", "age": 34, "interests": ["Art", "Technologie", "Lecture", "Sport", "Voyages", "Animaux", "Cuisine", "Musique", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_36.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                