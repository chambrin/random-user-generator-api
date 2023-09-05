
            export async function GET(request: Request, res: Response) {
                const data = {"id": 6, "name": "Ad\u00e9la\u00efde Richard", "email": "lebretonzacharie@example.com", "username": "aubertzacharie", "job": "vendeur-conseil en mat\u00e9riel agricole", "gender": "Homme", "phone_number": "+33 3 85 64 01 49", "website": "http://www.ruiz.fr/", "address": "64, rue Anne Gomez, 12675 Saint Bernard", "birthdate": "1963-03-22", "age": 60, "interests": ["Art", "Cin\u00e9ma", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                