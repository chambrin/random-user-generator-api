
            export async function GET(request: Request, res: Response) {
                const data = {"id": 11, "name": "Aurore Jacques", "email": "wseguin@example.net", "username": "smarie", "job": "architecte produit industriel", "gender": "Femme", "phone_number": "+33 4 83 92 88 44", "website": "http://www.bailly.net/", "address": "78, avenue Olivie Benoit, 58257 Sainte Christelle-sur-Mer", "birthdate": "1955-09-15", "age": 67, "interests": ["Cuisine", "Art", "Cin\u00e9ma", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                