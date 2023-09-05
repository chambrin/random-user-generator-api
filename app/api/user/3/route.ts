
            export async function GET(request: Request, res: Response) {
                const data = {"id": 3, "name": "\u00c9douard Rodrigues", "email": "christellelanglois@example.com", "username": "alexandre81", "job": "g\u00e9ologue minier", "gender": "Femme", "phone_number": "+33 (0)2 45 36 77 46", "website": "http://fleury.fr/", "address": "avenue de Boulanger, 94995 Gilbert", "birthdate": "1958-07-28", "age": 65, "interests": ["Photo", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                