
            export async function GET(request: Request, res: Response) {
                const data = {"id": 16, "name": "Fran\u00e7oise Lambert", "email": "sylvie87@example.org", "username": "franckaubert", "job": "enseignant-chercheur", "gender": "Homme", "phone_number": "+33 (0)2 47 66 82 52", "website": "http://clement.com/", "address": "92, avenue de Barbe, 29398 Leconte-sur-Mer", "birthdate": "1991-05-25", "age": 32, "interests": ["Photo", "Musique", "Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                