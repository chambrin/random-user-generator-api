
            export async function GET(request: Request, res: Response) {
                const data = {"id": 16, "name": "Paul Adam", "email": "zbourgeois@example.com", "username": "caroline14", "job": "vendeur en animalerie", "gender": "Femme", "phone_number": "+33 2 34 09 89 44", "website": "https://www.didier.fr/", "address": "57, avenue de Gaillard, 91968 Barthelemy-la-For\u00eat", "birthdate": "1957-08-15", "age": 66, "interests": ["Technologie", "Voyages", "Cin\u00e9ma", "Animaux", "Lecture"], "user_image_url": "/random_avatar/user_16.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                