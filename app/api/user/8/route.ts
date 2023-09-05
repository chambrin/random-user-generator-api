
            export async function GET(request: Request, res: Response) {
                const data = {"id": 8, "name": "Patrick Delahaye", "email": "guilbertdiane@example.com", "username": "charlesletellier", "job": "r\u00e9gisseur lumi\u00e8re", "gender": "Homme", "phone_number": "03 67 93 63 60", "website": "http://diaz.fr/", "address": "40, avenue Brunet, 70884 Ruiz", "birthdate": "1967-05-26", "age": 56, "interests": ["Animaux"], "user_image_url": "/random_avatar/user_8.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                