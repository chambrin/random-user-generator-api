
            export async function GET(request: Request, res: Response) {
                const data = {"id": 2, "name": "Manon Benard", "email": "bruneaulaurence@example.com", "username": "wmaury", "job": "pisteur secouriste", "gender": "Homme", "phone_number": "+33 (0)5 49 57 00 74", "website": "https://www.teixeira.com/", "address": "7, avenue Nicolas, 92875 AubertBourg", "birthdate": "1997-06-08", "age": 26, "interests": ["Animaux", "Lecture", "Cuisine", "Sport", "Musique", "Technologie"], "user_image_url": "/random_avatar/user_2.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                