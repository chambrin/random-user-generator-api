
            export async function GET(request: Request, res: Response) {
                const data = {"id": 1, "name": "Claire Bertrand", "email": "robertbodin@example.com", "username": "ihamel", "job": "op\u00e9rateur de fabrication de produits alimentaires", "gender": "Femme", "phone_number": "+33 5 90 93 38 68", "website": "http://www.blanchet.com/", "address": "22, boulevard Claude L\u00e9v\u00eaque, 67421 Saint In\u00e8sVille", "birthdate": "1985-08-16", "age": 38, "interests": ["Cuisine", "Art", "Animaux", "Voyages", "Technologie", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_1.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                