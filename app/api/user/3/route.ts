
            export async function GET(request: Request, res: Response) {
                const data = {"id": 3, "name": "Susan Blin", "email": "oleclerc@example.net", "username": "wgauthier", "job": "clerc d'huissier", "gender": "Homme", "phone_number": "+33 3 10 65 03 77", "website": "http://david.com/", "address": "76, rue Aim\u00e9 Lecomte, 59372 Fran\u00e7oisVille", "birthdate": "2000-12-21", "age": 22, "interests": ["Technologie", "Cin\u00e9ma", "Photo", "Voyages", "Cuisine", "Musique", "Animaux", "Art", "Sport", "Lecture"], "user_image_url": "/random_avatar/user_3.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                