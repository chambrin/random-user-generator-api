
            export async function GET(request: Request, res: Response) {
                const data = {"id": 18, "name": "Pierre Pereira", "email": "alexandriemorel@example.org", "username": "jeanne09", "job": "pisteur secouriste", "gender": "Homme", "phone_number": "0230997199", "website": "https://lebon.fr/", "address": "237, chemin Dupont, 20998 Saint Charles", "birthdate": "1954-09-16", "age": 68, "interests": ["Voyages", "Art", "Cin\u00e9ma", "Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                