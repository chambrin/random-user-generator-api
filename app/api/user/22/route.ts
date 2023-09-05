
            export async function GET(request: Request, res: Response) {
                const data = {"id": 22, "name": "Andr\u00e9 Fernandes", "email": "michelle12@example.net", "username": "paul95", "job": "chaudronnier", "gender": "Femme", "phone_number": "04 89 48 12 99", "website": "http://www.masse.fr/", "address": "44, avenue Renard, 38945 Parentnec", "birthdate": "1956-12-30", "age": 66, "interests": ["Cuisine", "Voyages", "Cin\u00e9ma", "Lecture", "Technologie", "Photo", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                