
            export async function GET(request: Request, res: Response) {
                const data = {"id": 40, "name": "Th\u00e9ophile Verdier", "email": "gonzaleznathalie@example.net", "username": "olivier32", "job": "technicien de l'intervention sociale et familiale", "gender": "Femme", "phone_number": "0173754348", "website": "https://www.samson.com/", "address": "53, rue de Rolland, 07928 Guillet", "birthdate": "1966-07-12", "age": 57, "interests": ["Musique", "Cuisine", "Lecture", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                