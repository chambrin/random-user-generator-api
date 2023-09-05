
            export async function GET(request: Request, res: Response) {
                const data = {"id": 18, "name": "C\u00e9line Durand Le Texier", "email": "joubertmaurice@example.net", "username": "odette78", "job": "agent arboricole", "gender": "Homme", "phone_number": "01 73 31 56 90", "website": "https://www.riviere.fr/", "address": "8, chemin de Deschamps, 39176 Dupr\u00e9-les-Bains", "birthdate": "1982-07-20", "age": 41, "interests": ["Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                