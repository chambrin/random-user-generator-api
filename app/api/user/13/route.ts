
            export async function GET(request: Request, res: Response) {
                const data = {"id": 13, "name": "Margaud Weber-Hubert", "email": "laure18@example.com", "username": "charrierzacharie", "job": "agent g\u00e9n\u00e9ral g\u00e9n\u00e9rale d'assurances", "gender": "Homme", "phone_number": "+33 2 99 62 76 90", "website": "https://leconte.net/", "address": "1, rue Margot Guilbert, 50623 Saint Thibault", "birthdate": "1953-05-24", "age": 70, "interests": ["Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                