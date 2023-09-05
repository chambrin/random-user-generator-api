
            export async function GET(request: Request, res: Response) {
                const data = {"id": 20, "name": "Emmanuel Normand", "email": "audrey24@example.com", "username": "francoiseparis", "job": "technicien en traitement des d\u00e9chets", "gender": "Homme", "phone_number": "05 61 95 65 85", "website": "http://chartier.fr/", "address": "chemin J\u00e9r\u00f4me Delahaye, 09896 Dos Santos-les-Bains", "birthdate": "2000-03-22", "age": 23, "interests": ["Musique", "Lecture", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                