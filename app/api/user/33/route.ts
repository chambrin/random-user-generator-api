
            export async function GET(request: Request, res: Response) {
                const data = {"id": 33, "name": "Agn\u00e8s Jacob-Petitjean", "email": "carreemilie@example.com", "username": "sweiss", "job": "ergoth\u00e9rapeute", "gender": "Homme", "phone_number": "03 67 09 83 50", "website": "https://coste.com/", "address": "20, rue Cohen, 38153 Leroy", "birthdate": "1996-07-19", "age": 27, "interests": ["Sport", "Technologie", "Animaux", "Lecture", "Cin\u00e9ma"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                