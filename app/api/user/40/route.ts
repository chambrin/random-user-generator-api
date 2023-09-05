
            export async function GET(request: Request, res: Response) {
                const data = {"id": 40, "name": "Julien Bazin", "email": "victor81@example.com", "username": "spascal", "job": "manipulateur en \u00e9lectroradiologie m\u00e9dicale", "gender": "Homme", "phone_number": "0457761987", "website": "http://leblanc.org/", "address": "65, avenue de Boutin, 65437 Renarddan", "birthdate": "1985-12-20", "age": 37, "interests": ["Lecture", "Animaux", "Technologie", "Photo", "Sport", "Voyages", "Musique", "Cuisine", "Art"], "user_image_url": "/random_avatar/user_40.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                