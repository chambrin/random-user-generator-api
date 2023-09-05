
            export async function GET(request: Request, res: Response) {
                const data = {"id": 10, "name": "Marcelle Guillou", "email": "lebrungeorges@example.com", "username": "sylvie77", "job": "animateur nature nature", "gender": "Femme", "phone_number": "+33 (0)5 96 88 53 97", "website": "https://pascal.fr/", "address": "389, chemin Bodin, 34982 Chevallier", "birthdate": "1998-02-19", "age": 25, "interests": ["Cuisine", "Technologie", "Sport"], "user_image_url": "/random_avatar/user_10.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                