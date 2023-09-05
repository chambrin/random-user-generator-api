
            export async function GET(request: Request, res: Response) {
                const data = {"id": 11, "name": "Arthur Joly-Lesage", "email": "couturieradele@example.net", "username": "williamparis", "job": "ing\u00e9nieur environnement et risques industriels", "gender": "Femme", "phone_number": "+33 5 53 71 60 15", "website": "https://gerard.com/", "address": "boulevard Joseph Blanc, 52935 Martin", "birthdate": "1983-07-16", "age": 40, "interests": ["Cin\u00e9ma", "Technologie", "Photo", "Musique", "Voyages", "Cuisine"], "user_image_url": "/random_avatar/user_11.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                