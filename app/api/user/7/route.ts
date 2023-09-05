
            export async function GET(request: Request, res: Response) {
                const data = {"id": 7, "name": "Sylvie Martel", "email": "thibaultbouvet@example.com", "username": "laurentbousquet", "job": "m\u00e9canicien d'entretien d'avion", "gender": "Femme", "phone_number": "+33 3 39 37 82 39", "website": "http://petit.net/", "address": "761, avenue de Colas, 83980 Saint Isaac-la-For\u00eat", "birthdate": "1957-02-23", "age": 66, "interests": ["Lecture", "Voyages", "Sport", "Animaux", "Technologie", "Musique", "Cin\u00e9ma", "Cuisine", "Photo"], "user_image_url": "/random_avatar/user_7.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                