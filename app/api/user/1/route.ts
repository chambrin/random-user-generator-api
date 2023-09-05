
            export async function GET(request: Request, res: Response) {
                const data = {"id": 1, "name": "Aur\u00e9lie Delaunay du Pr\u00e9vost", "email": "elisabethlombard@example.com", "username": "richardpereira", "job": "assistant de gestion en PME", "gender": "Femme", "phone_number": "+33 (0)3 65 76 33 39", "website": "http://perrot.fr/", "address": "703, rue de Barre, 61122 Martel", "birthdate": "1978-04-23", "age": 45, "interests": ["Cin\u00e9ma", "Photo"], "user_image_url": "/random_avatar/user_1.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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