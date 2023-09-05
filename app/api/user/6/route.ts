
            export async function GET(request: Request, res: Response) {
                const data = {"id": 6, "name": "In\u00e8s de Gonzalez", "email": "blondelnicole@example.net", "username": "baroncamille", "job": "directeur d'h\u00f4pital", "gender": "Homme", "phone_number": "+33 (0)1 39 63 36 70", "website": "https://www.le.com/", "address": "815, boulevard Julien Leli\u00e8vre, 43373 Delaunaynec", "birthdate": "1958-04-22", "age": 65, "interests": ["Technologie", "Lecture", "Art", "Sport", "Animaux", "Cuisine"], "user_image_url": "/random_avatar/user_6.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                