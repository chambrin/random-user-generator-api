
            export async function GET(request: Request, res: Response) {
                const data = {"id": 24, "name": "Val\u00e9rie Carre", "email": "brunlouise@example.com", "username": "neveumichel", "job": "designer sonore", "gender": "Homme", "phone_number": "0158125017", "website": "https://brunel.fr/", "address": "33, rue Valette, 97124 MullerBourg", "birthdate": "1968-02-04", "age": 55, "interests": ["Photo"], "user_image_url": "/random_avatar/user_24.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                