
            export async function GET(request: Request, res: Response) {
                const data = {"id": 34, "name": "Laurence de Georges", "email": "massonleon@example.net", "username": "qleclercq", "job": "ing\u00e9nieur support", "gender": "Homme", "phone_number": "05 81 62 98 32", "website": "http://letellier.fr/", "address": "boulevard de Blanchet, 81804 Riou", "birthdate": "2002-12-09", "age": 20, "interests": ["Cuisine", "Musique", "Technologie", "Voyages", "Sport", "Animaux", "Cin\u00e9ma", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                