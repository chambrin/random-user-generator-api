
            export async function GET(request: Request, res: Response) {
                const data = {"id": 17, "name": "Aim\u00e9e Ruiz-Lefebvre", "email": "juliengabriel@example.com", "username": "xdelattre", "job": "secr\u00e9taire juridique", "gender": "Homme", "phone_number": "+33 (0)5 19 56 08 15", "website": "https://www.lemoine.org/", "address": "858, chemin Didier, 48964 Saint Guillaume-la-For\u00eat", "birthdate": "1974-05-23", "age": 49, "interests": ["Photo", "Art", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                