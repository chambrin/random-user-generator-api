
            export async function GET(request: Request, res: Response) {
                const data = {"id": 15, "name": "Charles Boutin du Michaud", "email": "vaubry@example.org", "username": "philippemorel", "job": "ing\u00e9nieur concepteur conceptrice en m\u00e9canique", "gender": "Femme", "phone_number": "0327928496", "website": "https://lacroix.fr/", "address": "49, rue Renaud, 37351 Saint Tristan", "birthdate": "1956-02-29", "age": 67, "interests": ["Photo", "Lecture", "Voyages", "Cuisine", "Technologie", "Cin\u00e9ma"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                