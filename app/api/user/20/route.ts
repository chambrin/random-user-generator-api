
            export async function GET(request: Request, res: Response) {
                const data = {"id": 20, "name": "Alex Baron", "email": "hmathieu@example.net", "username": "julielaine", "job": "ing\u00e9nieur en m\u00e9canique", "gender": "Femme", "phone_number": "05 63 11 98 46", "website": "https://www.guillet.org/", "address": "3, boulevard Thierry, 87742 Saint Emmanuelledan", "birthdate": "1963-03-03", "age": 60, "interests": ["Photo", "Technologie", "Voyages", "Sport", "Animaux", "Lecture", "Musique"], "user_image_url": "/random_avatar/user_20.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                