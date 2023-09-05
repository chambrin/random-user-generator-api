
            export async function GET(request: Request, res: Response) {
                const data = {"id": 39, "name": "V\u00e9ronique-Michelle Loiseau", "email": "wtexier@example.net", "username": "patriciamonnier", "job": "responsable approvisionnement", "gender": "Femme", "phone_number": "+33 2 90 37 75 76", "website": "http://moreno.com/", "address": "963, boulevard Louise Gallet, 81765 Benoit", "birthdate": "2001-06-22", "age": 22, "interests": ["Musique", "Technologie"], "user_image_url": "/random_avatar/user_39.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                