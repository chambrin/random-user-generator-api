
            export async function GET(request: Request, res: Response) {
                const data = {"id": 12, "name": "Suzanne Leroux", "email": "rbonnin@example.net", "username": "patrickrenard", "job": "conseiller espace info-\u00e9nergie", "gender": "Femme", "phone_number": "+33 4 74 54 45 04", "website": "https://www.lacombe.fr/", "address": "rue Michelle Fouquet, 79221 Mar\u00e9chal", "birthdate": "1973-06-29", "age": 50, "interests": ["Animaux", "Sport", "Art", "Cuisine"], "user_image_url": "/random_avatar/user_12.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                