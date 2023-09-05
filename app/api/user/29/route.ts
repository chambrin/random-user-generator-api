
            export async function GET(request: Request, res: Response) {
                const data = {"id": 29, "name": "Aur\u00e9lie de Bouchet", "email": "cordiersusanne@example.net", "username": "pbreton", "job": "boulanger", "gender": "Femme", "phone_number": "+33 2 33 22 30 06", "website": "http://www.moreau.com/", "address": "rue de Vallet, 23959 Delormedan", "birthdate": "1981-03-21", "age": 42, "interests": ["Sport", "Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                