
            export async function GET(request: Request, res: Response) {
                const data = {"id": 13, "name": "J\u00e9r\u00f4me Chevalier-Samson", "email": "martineaujacques@example.org", "username": "manon83", "job": "agent de d\u00e9veloppement touristique", "gender": "Femme", "phone_number": "+33 (0)3 51 67 62 68", "website": "http://www.blin.com/", "address": "89, chemin Marchal, 67535 Godard", "birthdate": "1959-02-12", "age": 64, "interests": ["Art", "Musique", "Cuisine", "Sport", "Photo", "Technologie", "Animaux"], "user_image_url": "/random_avatar/user_13.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                