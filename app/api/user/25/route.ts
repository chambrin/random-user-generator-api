
            export async function GET(request: Request, res: Response) {
                const data = {"id": 25, "name": "Claude Ruiz", "email": "lrobin@example.org", "username": "dumasfranck", "job": "brodeur", "gender": "Femme", "phone_number": "+33 6 12 71 71 25", "website": "http://www.auger.org/", "address": "89, boulevard Laure Laporte, 70735 Alexandrenec", "birthdate": "1959-04-26", "age": 64, "interests": ["Musique", "Sport", "Technologie", "Voyages", "Cin\u00e9ma"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                