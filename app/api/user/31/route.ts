
            export async function GET(request: Request, res: Response) {
                const data = {"id": 31, "name": "Guillaume Delahaye", "email": "costeguy@example.org", "username": "isabelleweber", "job": "canalisateur", "gender": "Femme", "phone_number": "0555863587", "website": "http://lambert.fr/", "address": "37, chemin de Marin, 04145 Mace-sur-Gautier", "birthdate": "2003-04-20", "age": 20, "interests": ["Animaux", "Lecture"], "user_image_url": "/random_avatar/user_31.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                