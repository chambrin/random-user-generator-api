
            export async function GET(request: Request, res: Response) {
                const data = {"id": 22, "name": "Michelle Hebert du Costa", "email": "moniqueclement@example.com", "username": "ybodin", "job": "sellier", "gender": "Femme", "phone_number": "0141862168", "website": "http://www.jacques.com/", "address": "22, rue Astrid Teixeira, 71111 Petitjean", "birthdate": "1999-12-29", "age": 23, "interests": ["Musique", "Technologie", "Photo", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                