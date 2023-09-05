
            export async function GET(request: Request, res: Response) {
                const data = {"id": 38, "name": "Maurice Lemonnier", "email": "nicolevasseur@example.net", "username": "anouk98", "job": "danseur", "gender": "Homme", "phone_number": "+33 (0)4 65 01 79 23", "website": "http://de.fr/", "address": "41, chemin J\u00e9r\u00f4me Le Goff, 66810 Vidal-sur-Mer", "birthdate": "1969-02-15", "age": 54, "interests": ["Sport", "Voyages", "Art", "Musique", "Animaux", "Photo"], "user_image_url": "/random_avatar/user_38.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                