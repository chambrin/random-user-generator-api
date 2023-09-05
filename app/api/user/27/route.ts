
            export async function GET(request: Request, res: Response) {
                const data = {"id": 27, "name": "Fran\u00e7oise Rossi", "email": "bernardmichaud@example.org", "username": "marine34", "job": "prototypiste en mat\u00e9riaux souples", "gender": "Femme", "phone_number": "+33 5 57 64 21 34", "website": "http://www.carpentier.fr/", "address": "rue Jacques, 41114 MaillardVille", "birthdate": "1968-04-05", "age": 55, "interests": ["Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                