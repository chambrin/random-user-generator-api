
            export async function GET(request: Request, res: Response) {
                const data = {"id": 9, "name": "Nicolas David", "email": "adriennedumas@example.com", "username": "zrobert", "job": "d\u00e9veloppeur d'applications mobiles", "gender": "Femme", "phone_number": "+33 2 34 38 15 55", "website": "http://gregoire.fr/", "address": "55, rue de Lema\u00eetre, 18574 Sainte J\u00e9r\u00f4me-les-Bains", "birthdate": "1982-03-22", "age": 41, "interests": ["Technologie", "Animaux", "Lecture", "Photo"], "user_image_url": "/random_avatar/user_9.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                