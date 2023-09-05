
            export async function GET(request: Request, res: Response) {
                const data = {"id": 32, "name": "\u00c9lodie du Techer", "email": "scarre@example.com", "username": "jourdancolette", "job": "ing\u00e9nieur calcul", "gender": "Femme", "phone_number": "0149320275", "website": "http://fabre.com/", "address": "85, chemin de Dumas, 14459 Duval", "birthdate": "1975-10-27", "age": 47, "interests": ["Sport", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                