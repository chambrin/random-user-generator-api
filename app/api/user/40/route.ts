
            export async function GET(request: Request, res: Response) {
                const data = {"id": 40, "name": "Corinne Petitjean Le Chevalier", "email": "nroy@example.net", "username": "robertpichon", "job": "charg\u00e9 d'affaires en g\u00e9nie climatique", "gender": "Homme", "phone_number": "+33 (0)1 42 92 22 35", "website": "http://maillot.fr/", "address": "69, rue de Laine, 36526 Marques", "birthdate": "1976-02-13", "age": 47, "interests": ["Technologie", "Voyages", "Lecture", "Art", "Photo", "Musique", "Sport", "Animaux", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_40.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                