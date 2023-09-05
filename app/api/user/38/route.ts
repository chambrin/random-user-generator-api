
            export async function GET(request: Request, res: Response) {
                const data = {"id": 38, "name": "L\u00e9on Carlier", "email": "dmuller@example.net", "username": "brunelhenri", "job": "charg\u00e9 de projet \u00e9v\u00e9nementiel", "gender": "Femme", "phone_number": "+33 (0)3 73 19 63 84", "website": "https://www.hamel.fr/", "address": "10, boulevard Thierry Rodriguez, 32910 Poirierdan", "birthdate": "1953-07-06", "age": 70, "interests": ["Technologie", "Cin\u00e9ma", "Lecture", "Musique", "Art", "Animaux", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                