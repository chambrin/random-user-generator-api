
            export async function GET(request: Request, res: Response) {
                const data = {"id": 26, "name": "Anne Didier", "email": "glecoq@example.org", "username": "alphonse32", "job": "costumier", "gender": "Femme", "phone_number": "0798747851", "website": "https://www.marques.fr/", "address": "54, rue Paris, 17447 Mahe-les-Bains", "birthdate": "1956-09-03", "age": 67, "interests": ["Art", "Animaux", "Cuisine", "Lecture"], "user_image_url": "/random_avatar/user_26.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                