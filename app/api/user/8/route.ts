
            export async function GET(request: Request, res: Response) {
                const data = {"id": 8, "name": "Gr\u00e9goire Le Reynaud", "email": "maurice06@example.org", "username": "christophe06", "job": "ing\u00e9nieur r\u00e9servoir", "gender": "Homme", "phone_number": "0214716226", "website": "https://bertin.com/", "address": "77, rue Jourdan, 63196 Dumontnec", "birthdate": "1960-11-19", "age": 62, "interests": ["Musique", "Art", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_8.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                