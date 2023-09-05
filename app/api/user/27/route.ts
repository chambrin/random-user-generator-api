
            export async function GET(request: Request, res: Response) {
                const data = {"id": 27, "name": "Marcelle Nguyen", "email": "michelle80@example.com", "username": "jacquotroland", "job": "chercheur en chimie", "gender": "Femme", "phone_number": "02 44 39 81 26", "website": "https://www.barbier.fr/", "address": "99, avenue Aim\u00e9e Faivre, 63928 Cordier", "birthdate": "1982-12-01", "age": 40, "interests": ["Cuisine", "Photo"], "user_image_url": "/random_avatar/user_27.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                