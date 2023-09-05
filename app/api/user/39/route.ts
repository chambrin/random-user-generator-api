
            export async function GET(request: Request, res: Response) {
                const data = {"id": 39, "name": "Jules Allard de la Bazin", "email": "henryadele@example.net", "username": "alphonse44", "job": "m\u00e9decin humanitaire", "gender": "Homme", "phone_number": "03 52 38 80 25", "website": "http://www.dupuy.com/", "address": "87, chemin Andr\u00e9e Hebert, 81306 Cohen-sur-Mer", "birthdate": "1973-03-06", "age": 50, "interests": ["Cin\u00e9ma", "Technologie", "Sport", "Cuisine", "Musique", "Art", "Lecture", "Photo", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                