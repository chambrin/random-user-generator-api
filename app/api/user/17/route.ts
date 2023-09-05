
            export async function GET(request: Request, res: Response) {
                const data = {"id": 17, "name": "Laetitia Raynaud", "email": "michele67@example.org", "username": "martine48", "job": "juriste en droit social", "gender": "Homme", "phone_number": "0389037045", "website": "http://www.briand.com/", "address": "rue Sauvage, 97265 Da Costa", "birthdate": "1990-02-17", "age": 33, "interests": ["Cuisine", "Technologie", "Voyages", "Sport", "Musique", "Cin\u00e9ma", "Animaux", "Lecture"], "user_image_url": "/random_avatar/user_17.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                