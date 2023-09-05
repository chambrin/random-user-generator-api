
            export async function GET(request: Request, res: Response) {
                const data = {"id": 4, "name": "Lucas Le Valentin", "email": "hervemichelle@example.org", "username": "mlecoq", "job": "ing\u00e9nieur \u00e9lectricien", "gender": "Homme", "phone_number": "0183899113", "website": "https://fouquet.fr/", "address": "67, rue de Lopes, 19841 Schmitt-sur-Pires", "birthdate": "1999-04-12", "age": 24, "interests": ["Sport", "Voyages", "Art", "Animaux", "Lecture", "Technologie"], "user_image_url": "/random_avatar/user_4.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                