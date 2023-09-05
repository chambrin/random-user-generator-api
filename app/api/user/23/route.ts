
            export async function GET(request: Request, res: Response) {
                const data = {"id": 23, "name": "Mich\u00e8le du Seguin", "email": "irolland@example.net", "username": "denis16", "job": "conseiller d'\u00e9levage", "gender": "Homme", "phone_number": "02 49 72 50 05", "website": "http://samson.fr/", "address": "66, avenue Jacquet, 32529 Martins", "birthdate": "2002-03-23", "age": 21, "interests": ["Animaux", "Musique", "Art", "Lecture", "Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                