
            export async function GET(request: Request, res: Response) {
                const data = {"id": 2, "name": "Gilbert Rivi\u00e8re Le Lenoir", "email": "victorrodrigues@example.net", "username": "zchauvin", "job": "technico-commercial en agroalimentaire", "gender": "Homme", "phone_number": "+33 5 62 37 45 95", "website": "https://peltier.org/", "address": "84, avenue Richard, 30340 Giraud", "birthdate": "1972-08-20", "age": 51, "interests": ["Cin\u00e9ma", "Art", "Photo", "Cuisine", "Animaux"], "user_image_url": "/random_avatar/user_2.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                