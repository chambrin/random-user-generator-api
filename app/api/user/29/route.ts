
            export async function GET(request: Request, res: Response) {
                const data = {"id": 29, "name": "Paul du Nguyen", "email": "adrienne59@example.com", "username": "bonnetluc", "job": "employ\u00e9 de pressing", "gender": "Homme", "phone_number": "+33 3 54 41 55 92", "website": "http://www.noel.com/", "address": "85, rue de Verdier, 97338 Saint Susanne", "birthdate": "2001-07-06", "age": 22, "interests": ["Voyages", "Cin\u00e9ma", "Musique", "Art"], "user_image_url": "/random_avatar/user_29.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                