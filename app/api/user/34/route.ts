
            export async function GET(request: Request, res: Response) {
                const data = {"id": 34, "name": "\u00c9douard Hernandez", "email": "andrelenoir@example.com", "username": "lorraine18", "job": "gestionnaire de contrats d'assurance", "gender": "Femme", "phone_number": "0254382001", "website": "http://www.valentin.com/", "address": "37, rue \u00c9dith Bailly, 51918 Meunier", "birthdate": "1988-11-16", "age": 34, "interests": ["Cin\u00e9ma", "Musique", "Technologie", "Animaux", "Cuisine", "Voyages", "Sport"], "user_image_url": "/random_avatar/user_34.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                