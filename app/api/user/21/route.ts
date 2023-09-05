
            export async function GET(request: Request, res: Response) {
                const data = {"id": 21, "name": "C\u00e9line-Cl\u00e9mence G\u00e9rard", "email": "xcohen@example.com", "username": "massethibaut", "job": "responsable de laboratoire de contr\u00f4le en chimie", "gender": "Homme", "phone_number": "+33 (0)6 31 41 97 24", "website": "http://martin.org/", "address": "78, rue Cl\u00e9mence Laurent, 87796 Robert", "birthdate": "1991-03-14", "age": 32, "interests": ["Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                