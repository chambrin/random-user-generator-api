
            export async function GET(request: Request, res: Response) {
                const data = {"id": 29, "name": "Richard Pichon", "email": "glopez@example.com", "username": "margaudbernard", "job": "conseiller p\u00e9nitentiaire d'insertion et de probation", "gender": "Femme", "phone_number": "+33 4 43 85 98 67", "website": "https://pasquier.net/", "address": "6, rue de Renaud, 25547 Navarro", "birthdate": "2002-07-08", "age": 21, "interests": ["Animaux", "Musique", "Cuisine", "Sport"], "user_image_url": "/random_avatar/user_29.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                