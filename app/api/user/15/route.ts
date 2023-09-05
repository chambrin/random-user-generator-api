
            export async function GET(request: Request, res: Response) {
                const data = {"id": 15, "name": "Gilles No\u00ebl", "email": "christellemaurice@example.net", "username": "julesaubert", "job": "professeur en activit\u00e9 physique adapt\u00e9e", "gender": "Femme", "phone_number": "+33 7 53 63 01 14", "website": "https://www.marchand.fr/", "address": "806, avenue Luc G\u00e9rard, 92633 Sainte St\u00e9phane", "birthdate": "2001-07-02", "age": 22, "interests": ["Lecture", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                