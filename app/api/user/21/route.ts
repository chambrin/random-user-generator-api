
            export async function GET(request: Request, res: Response) {
                const data = {"id": 21, "name": "Danielle de la Faivre", "email": "danielle49@example.com", "username": "kbodin", "job": "vitrailliste", "gender": "Femme", "phone_number": "03 71 58 65 58", "website": "http://julien.com/", "address": "rue Nicolas, 46682 Peron-sur-Morin", "birthdate": "2001-11-19", "age": 21, "interests": ["Cuisine", "Art", "Animaux", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                