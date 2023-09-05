
            export async function GET(request: Request, res: Response) {
                const data = {"id": 30, "name": "William-William Michel", "email": "alexandrielucas@example.net", "username": "iriviere", "job": "ing\u00e9nieur syst\u00e8me", "gender": "Homme", "phone_number": "+33 (0)3 71 81 42 67", "website": "https://aubert.org/", "address": "54, avenue Olivier Petit, 41330 Sainte Pauline", "birthdate": "1999-10-01", "age": 23, "interests": ["Photo", "Sport"], "user_image_url": "/random_avatar/user_30.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                