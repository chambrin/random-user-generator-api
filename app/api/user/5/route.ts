
            export async function GET(request: Request, res: Response) {
                const data = {"id": 5, "name": "Marc Bigot", "email": "pirestristan@example.org", "username": "philippe96", "job": "commissaire de police", "gender": "Homme", "phone_number": "0586688202", "website": "https://www.muller.com/", "address": "16, chemin Marine Gosselin, 45755 Benoit-la-For\u00eat", "birthdate": "1969-05-30", "age": 54, "interests": ["Sport", "Cin\u00e9ma", "Technologie", "Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                