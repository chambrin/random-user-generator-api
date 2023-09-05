
            export async function GET(request: Request, res: Response) {
                const data = {"id": 12, "name": "Vincent Pinto", "email": "nicolasbarre@example.org", "username": "mchauvet", "job": "masseur", "gender": "Femme", "phone_number": "+33 (0)3 57 85 82 05", "website": "https://moreau.net/", "address": "14, boulevard Jeannine Voisin, 70463 Sainte Julien-la-For\u00eat", "birthdate": "1967-09-16", "age": 55, "interests": ["Cuisine", "Lecture", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                