
            export async function GET(request: Request, res: Response) {
                const data = {"id": 12, "name": "Thierry Rodrigues", "email": "maggie06@example.com", "username": "anaistessier", "job": "concepteur designer packaging", "gender": "Homme", "phone_number": "0365424822", "website": "http://pascal.fr/", "address": "452, rue Eug\u00e8ne Girard, 26649 Grenier", "birthdate": "1993-09-05", "age": 30, "interests": ["Cuisine", "Sport", "Voyages", "Photo"], "user_image_url": "/random_avatar/user_12.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                