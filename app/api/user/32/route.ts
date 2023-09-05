
            export async function GET(request: Request, res: Response) {
                const data = {"id": 32, "name": "Alfred Robert", "email": "kjoly@example.com", "username": "eric35", "job": "chirurgien", "gender": "Homme", "phone_number": "+33 3 27 52 62 80", "website": "http://www.regnier.fr/", "address": "650, rue St\u00e9phanie Gr\u00e9goire, 04616 Fouquet-les-Bains", "birthdate": "1985-02-18", "age": 38, "interests": ["Art", "Sport", "Voyages", "Animaux", "Musique", "Photo", "Cuisine", "Cin\u00e9ma", "Technologie", "Lecture"], "user_image_url": "/random_avatar/user_32.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                