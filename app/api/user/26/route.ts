
            export async function GET(request: Request, res: Response) {
                const data = {"id": 26, "name": "Sophie Salmon", "email": "margaretroche@example.com", "username": "alfred30", "job": "d\u00e9corateur", "gender": "Homme", "phone_number": "+33 (0)2 57 45 86 64", "website": "https://denis.net/", "address": "chemin de Chauvin, 72827 Saint Margaud-la-For\u00eat", "birthdate": "1993-07-04", "age": 30, "interests": ["Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                