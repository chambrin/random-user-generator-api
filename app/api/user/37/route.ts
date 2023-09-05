
            export async function GET(request: Request, res: Response) {
                const data = {"id": 37, "name": "Gabriel Schmitt", "email": "marcelmuller@example.net", "username": "gbenoit", "job": "animateur nature nature", "gender": "Femme", "phone_number": "+33 1 82 28 19 60", "website": "http://roger.fr/", "address": "avenue Gomez, 72462 Sainte Denis", "birthdate": "1974-02-23", "age": 49, "interests": ["Cuisine", "Voyages", "Cin\u00e9ma", "Sport", "Art", "Lecture", "Animaux", "Musique", "Technologie"], "user_image_url": "/random_avatar/user_37.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                