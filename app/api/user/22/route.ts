
            export async function GET(request: Request, res: Response) {
                const data = {"id": 22, "name": "Benjamin Lagarde-Leclercq", "email": "alexandrepascal@example.net", "username": "richardperret", "job": "barman", "gender": "Homme", "phone_number": "01 73 54 51 61", "website": "https://levy.fr/", "address": "44, boulevard Bonneau, 14354 Albert", "birthdate": "1990-02-18", "age": 33, "interests": ["Cuisine", "Photo", "Art", "Sport"], "user_image_url": "/random_avatar/user_22.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                