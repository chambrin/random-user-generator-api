
            export async function GET(request: Request, res: Response) {
                const data = {"id": 28, "name": "Christophe Joly", "email": "alfreddupuy@example.net", "username": "marie90", "job": "agent immobilier immobili\u00e8re", "gender": "Homme", "phone_number": "0240506422", "website": "http://vincent.net/", "address": "rue Pierre, 15167 Sainte Thierry", "birthdate": "1995-04-09", "age": 28, "interests": ["Voyages", "Art", "Photo", "Cuisine", "Animaux", "Musique", "Cin\u00e9ma", "Lecture"], "user_image_url": "/random_avatar/user_28.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                