
            export async function GET(request: Request, res: Response) {
                const data = {"id": 22, "name": "Victor de Arnaud", "email": "denis74@example.com", "username": "ebonnet", "job": "comptable", "gender": "Homme", "phone_number": "+33 (0)3 54 35 18 71", "website": "https://www.albert.fr/", "address": "avenue de Denis, 54154 Blanchard", "birthdate": "1993-08-20", "age": 30, "interests": ["Lecture", "Art"], "user_image_url": "/random_avatar/user_22.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                