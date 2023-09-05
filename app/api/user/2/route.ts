
            export async function GET(request: Request, res: Response) {
                const data = {"id": 2, "name": "Christiane Pons", "email": "qledoux@example.org", "username": "ttessier", "job": "charg\u00e9 d'\u00e9tudes naturalistes", "gender": "Femme", "phone_number": "+33 (0)5 40 12 70 94", "website": "https://www.legrand.com/", "address": "rue Franck Devaux, 09373 Gomez", "birthdate": "1998-05-17", "age": 25, "interests": ["Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                