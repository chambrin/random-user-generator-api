
            export async function GET(request: Request, res: Response) {
                const data = {"id": 35, "name": "Audrey du Marty", "email": "nicolasmargaret@example.com", "username": "devauxjerome", "job": "administrateur de logiciels de laboratoire", "gender": "Femme", "phone_number": "02 58 71 90 18", "website": "http://torres.fr/", "address": "842, rue Aur\u00e9lie Pichon, 37585 Lebreton", "birthdate": "1959-03-11", "age": 64, "interests": ["Sport", "Cin\u00e9ma", "Photo", "Voyages", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                