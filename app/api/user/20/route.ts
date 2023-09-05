
            export async function GET(request: Request, res: Response) {
                const data = {"id": 20, "name": "Roger Le Bernier", "email": "alexandreroux@example.org", "username": "rocherjosephine", "job": "charg\u00e9 d'\u00e9tudes m\u00e9dia", "gender": "Homme", "phone_number": "02 58 96 26 17", "website": "https://roger.fr/", "address": "60, boulevard Vall\u00e9e, 08995 Maillardnec", "birthdate": "1982-11-26", "age": 40, "interests": ["Animaux", "Technologie", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                