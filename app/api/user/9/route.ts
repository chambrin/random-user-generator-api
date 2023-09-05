
            export async function GET(request: Request, res: Response) {
                const data = {"id": 9, "name": "Jeanne Jean", "email": "charlotte89@example.org", "username": "dgosselin", "job": "ing\u00e9nieur analyste de l'air", "gender": "Femme", "phone_number": "+33 (0)4 78 53 52 86", "website": "https://petit.org/", "address": "avenue Raymond, 76477 Weiss-sur-Michaud", "birthdate": "2003-05-27", "age": 20, "interests": ["Lecture", "Musique", "Voyages", "Cin\u00e9ma", "Photo", "Sport", "Art", "Cuisine", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                