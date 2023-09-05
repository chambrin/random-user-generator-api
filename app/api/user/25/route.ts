
            export async function GET(request: Request, res: Response) {
                const data = {"id": 25, "name": "\u00c9ric Guillot", "email": "eleonore88@example.com", "username": "victorfischer", "job": "technicien logistique", "gender": "Homme", "phone_number": "+33 1 55 18 46 69", "website": "https://www.bruneau.fr/", "address": "1, rue Benjamin Aubry, 44439 Turpin", "birthdate": "1963-06-16", "age": 60, "interests": ["Voyages", "Musique"], "user_image_url": "/random_avatar/user_25.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                