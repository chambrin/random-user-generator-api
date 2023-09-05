
            export async function GET(request: Request, res: Response) {
                const data = {"id": 39, "name": "\u00c9douard Arnaud", "email": "anastasiecosta@example.org", "username": "joseph63", "job": "restaurateur d'oeuvres d'art", "gender": "Homme", "phone_number": "+33 1 41 75 43 41", "website": "http://lenoir.com/", "address": "713, avenue de Julien, 92456 Humbert", "birthdate": "1987-10-25", "age": 35, "interests": ["Cuisine", "Technologie", "Lecture", "Cin\u00e9ma", "Animaux", "Musique", "Sport", "Voyages", "Photo", "Art"], "user_image_url": "/random_avatar/user_39.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                