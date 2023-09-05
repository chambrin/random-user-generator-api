
            export async function GET(request: Request, res: Response) {
                const data = {"id": 17, "name": "Hortense du Delattre", "email": "michelledos-santos@example.net", "username": "benardclaire", "job": "m\u00e9diateur familial familiale", "gender": "Femme", "phone_number": "+33 5 35 38 23 15", "website": "http://www.bouvier.com/", "address": "914, avenue Hortense Poirier, 53635 TorresVille", "birthdate": "1990-10-10", "age": 32, "interests": ["Voyages", "Cuisine", "Sport", "Animaux", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                