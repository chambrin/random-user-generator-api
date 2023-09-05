
            export async function GET(request: Request, res: Response) {
                const data = {"id": 31, "name": "Olivie Duhamel", "email": "anne88@example.com", "username": "erenault", "job": "gestionnaire de contrats d'assurance", "gender": "Homme", "phone_number": "+33 (0)4 42 33 90 58", "website": "http://guillon.com/", "address": "rue de Perrier, 68294 Sainte Capucine-sur-Mer", "birthdate": "1967-12-25", "age": 55, "interests": ["Lecture", "Technologie", "Musique", "Cuisine"], "user_image_url": "/random_avatar/user_31.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                