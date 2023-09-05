
            export async function GET(request: Request, res: Response) {
                const data = {"id": 21, "name": "Alexandre Gay", "email": "yguyot@example.org", "username": "augustin83", "job": "ing\u00e9nieur nucl\u00e9aire", "gender": "Femme", "phone_number": "0481404038", "website": "https://delattre.org/", "address": "rue Alfred Bruneau, 22990 BoulangerVille", "birthdate": "1994-05-04", "age": 29, "interests": ["Voyages"], "user_image_url": "/random_avatar/user_21.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                