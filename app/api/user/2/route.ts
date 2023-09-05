
            export async function GET(request: Request, res: Response) {
                const data = {"id": 2, "name": "Matthieu Perez", "email": "clairemichaud@example.net", "username": "andree27", "job": "fiscaliste", "gender": "Homme", "phone_number": "+33 2 14 67 23 85", "website": "http://www.jacquot.fr/", "address": "30, avenue Fouquet, 52535 Saint Caroline", "birthdate": "1957-03-24", "age": 66, "interests": ["Photo", "Sport", "Cin\u00e9ma", "Art", "Musique", "Animaux", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                