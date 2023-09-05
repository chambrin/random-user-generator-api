
            export async function GET(request: Request, res: Response) {
                const data = {"id": 37, "name": "Alexandre Bouchet", "email": "dufouralfred@example.net", "username": "pblanc", "job": "p\u00e9diatre", "gender": "Homme", "phone_number": "+33 4 81 35 63 67", "website": "http://www.maillard.com/", "address": "360, chemin Oc\u00e9ane Cohen, 30592 HardyBourg", "birthdate": "1976-01-28", "age": 47, "interests": ["Animaux", "Cin\u00e9ma", "Lecture", "Cuisine", "Musique"], "user_image_url": "/random_avatar/user_37.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                