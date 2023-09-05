
            export async function GET(request: Request, res: Response) {
                const data = {"id": 10, "name": "L\u00e9on Jourdan", "email": "mariepoirier@example.net", "username": "hmartins", "job": "charg\u00e9 d'affaires en g\u00e9nie climatique", "gender": "Femme", "phone_number": "+33 1 81 36 82 17", "website": "http://www.bouvier.fr/", "address": "chemin Victoire Marchal, 26714 Durand", "birthdate": "1958-10-17", "age": 64, "interests": ["Art", "Cin\u00e9ma", "Animaux", "Sport", "Cuisine", "Lecture", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                