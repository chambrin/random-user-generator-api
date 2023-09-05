
            export async function GET(request: Request, res: Response) {
                const data = {"id": 16, "name": "Richard Barre", "email": "anastasie95@example.net", "username": "claire62", "job": "dessinateur de BD", "gender": "Homme", "phone_number": "02 61 74 68 21", "website": "https://wagner.fr/", "address": "53, rue de Martins, 45384 Saint Adriennedan", "birthdate": "1992-07-17", "age": 31, "interests": ["Musique", "Animaux", "Cin\u00e9ma", "Voyages"], "user_image_url": "/random_avatar/user_16.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                