
            export async function GET(request: Request, res: Response) {
                const data = {"id": 14, "name": "Joseph Leroux", "email": "laportezoe@example.org", "username": "mhamon", "job": "charg\u00e9 d'\u00e9tudes \u00e9conomiques", "gender": "Homme", "phone_number": "+33 1 43 34 12 48", "website": "http://delattre.fr/", "address": "905, chemin de Salmon, 60471 David", "birthdate": "1967-11-02", "age": 55, "interests": ["Musique", "Sport", "Cin\u00e9ma", "Animaux", "Technologie"], "user_image_url": "/random_avatar/user_14.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                