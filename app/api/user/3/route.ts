
            export async function GET(request: Request, res: Response) {
                const data = {"id": 3, "name": "Laurent Fouquet", "email": "zgeorges@example.net", "username": "hortense89", "job": "ing\u00e9nieur de maintenance industrielle", "gender": "Femme", "phone_number": "+33 (0)2 98 62 96 64", "website": "https://www.loiseau.fr/", "address": "95, rue Brunet, 59636 Costa-sur-Dufour", "birthdate": "1952-12-01", "age": 70, "interests": ["Art", "Cin\u00e9ma", "Sport", "Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                