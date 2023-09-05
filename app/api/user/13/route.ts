
            export async function GET(request: Request, res: Response) {
                const data = {"id": 13, "name": "Patricia Valette du Bernier", "email": "lagardecorinne@example.com", "username": "fleclercq", "job": "formulateur", "gender": "Homme", "phone_number": "+33 (0)2 36 87 70 21", "website": "http://www.poirier.fr/", "address": "17, avenue Ad\u00e9la\u00efde Boulanger, 46306 Merle", "birthdate": "1987-03-25", "age": 36, "interests": ["Art", "Animaux", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                