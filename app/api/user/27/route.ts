
            export async function GET(request: Request, res: Response) {
                const data = {"id": 27, "name": "Christophe Le Giraud", "email": "alexdaniel@example.com", "username": "patrick21", "job": "auditeur qualit\u00e9", "gender": "Femme", "phone_number": "02 52 60 35 50", "website": "https://www.guyot.fr/", "address": "63, rue de Lecoq, 79789 Navarro", "birthdate": "1979-02-23", "age": 44, "interests": ["Animaux"], "user_image_url": "/random_avatar/user_27.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                