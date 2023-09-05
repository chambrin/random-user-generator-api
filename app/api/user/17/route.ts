
            export async function GET(request: Request, res: Response) {
                const data = {"id": 17, "name": "\u00c9lise Charles", "email": "hubertelodie@example.org", "username": "laurentcharles", "job": "documentaliste", "gender": "Homme", "phone_number": "+33 (0)4 23 02 14 35", "website": "http://www.marechal.net/", "address": "3, rue Tristan Duhamel, 90147 Marin", "birthdate": "1961-09-03", "age": 62, "interests": ["Cin\u00e9ma", "Animaux", "Sport", "Cuisine", "Art", "Voyages", "Technologie", "Musique"], "user_image_url": "/random_avatar/user_17.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                