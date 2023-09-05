
            export async function GET(request: Request, res: Response) {
                const data = {"id": 33, "name": "Thierry Blin", "email": "ybonneau@example.net", "username": "rlebrun", "job": "professeur dans l'enseignement agricole", "gender": "Homme", "phone_number": "0547280836", "website": "https://www.maillard.fr/", "address": "419, rue de Nguyen, 52775 Bonnin", "birthdate": "1970-07-27", "age": 53, "interests": ["Musique", "Art", "Voyages", "Cuisine", "Cin\u00e9ma", "Animaux"], "user_image_url": "/random_avatar/user_33.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                