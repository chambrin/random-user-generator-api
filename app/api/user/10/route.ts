
            export async function GET(request: Request, res: Response) {
                const data = {"id": 10, "name": "Claude Dubois-Legendre", "email": "grondincapucine@example.net", "username": "marcelguillon", "job": "conseiller en insertion sociale et professionnelle", "gender": "Homme", "phone_number": "04 71 78 35 79", "website": "http://jacquot.com/", "address": "38, chemin de Charles, 55335 Martinezdan", "birthdate": "1953-03-20", "age": 70, "interests": ["Voyages", "Sport", "Photo", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                