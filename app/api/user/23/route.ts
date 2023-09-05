
            export async function GET(request: Request, res: Response) {
                const data = {"id": 23, "name": "Christiane Dufour", "email": "simone69@example.net", "username": "hherve", "job": "\u00e9ducateur sp\u00e9cialis\u00e9 sp\u00e9cialis\u00e9e", "gender": "Femme", "phone_number": "01 69 90 51 77", "website": "https://www.martineau.net/", "address": "15, boulevard de Merle, 53193 Merle-sur-Albert", "birthdate": "1969-03-05", "age": 54, "interests": ["Voyages", "Lecture"], "user_image_url": "/random_avatar/user_23.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                