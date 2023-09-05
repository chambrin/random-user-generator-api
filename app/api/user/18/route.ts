
            export async function GET(request: Request, res: Response) {
                const data = {"id": 18, "name": "Philippe Albert", "email": "llenoir@example.com", "username": "pasquierjacques", "job": "consultant SaaS", "gender": "Homme", "phone_number": "+33 (0)4 43 26 94 45", "website": "http://www.denis.org/", "address": "11, avenue de Tessier, 52330 Vallet", "birthdate": "1992-09-28", "age": 30, "interests": ["Sport", "Technologie", "Musique", "Art", "Voyages", "Photo", "Animaux", "Cuisine"], "user_image_url": "/random_avatar/user_18.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                