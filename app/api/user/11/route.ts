
            export async function GET(request: Request, res: Response) {
                const data = {"id": 11, "name": "Michel Lacombe-Muller", "email": "andreevasseur@example.com", "username": "mathilderaynaud", "job": "charg\u00e9 d'affaires en g\u00e9nie m\u00e9canique", "gender": "Homme", "phone_number": "04 38 42 61 00", "website": "http://www.perrot.net/", "address": "10, rue Christine Schneider, 68703 MarionBourg", "birthdate": "1967-07-14", "age": 56, "interests": ["Cin\u00e9ma", "Art", "Technologie", "Voyages", "Musique", "Lecture", "Sport", "Cuisine"], "user_image_url": "/random_avatar/user_11.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                