
            export async function GET(request: Request, res: Response) {
                const data = {"id": 37, "name": "J\u00e9r\u00f4me Bigot", "email": "aurelielecoq@example.com", "username": "fblanchard", "job": "juriste d'entreprise", "gender": "Homme", "phone_number": "+33 3 54 18 45 01", "website": "http://www.alves.fr/", "address": "chemin Dumas, 66500 Saint Emmanuel-les-Bains", "birthdate": "1981-06-01", "age": 42, "interests": ["Art", "Lecture", "Technologie", "Photo", "Cuisine", "Voyages", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                