
            export async function GET(request: Request, res: Response) {
                const data = {"id": 15, "name": "\u00c9lodie Guibert", "email": "kdufour@example.net", "username": "henribertrand", "job": "agent de transit", "gender": "Homme", "phone_number": "04 86 35 98 52", "website": "http://www.lemaire.fr/", "address": "834, chemin \u00c9milie Cl\u00e9ment, 30979 Charrier", "birthdate": "1986-06-11", "age": 37, "interests": ["Sport", "Animaux", "Technologie", "Voyages"], "user_image_url": "/random_avatar/user_15.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                