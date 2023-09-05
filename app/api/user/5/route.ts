
            export async function GET(request: Request, res: Response) {
                const data = {"id": 5, "name": "Sophie Schneider-Rodrigues", "email": "josephine79@example.org", "username": "marcellegimenez", "job": "chef d'exploitation d'usine d'incin\u00e9ration", "gender": "Femme", "phone_number": "+33 5 36 97 51 45", "website": "http://www.berthelot.fr/", "address": "54, chemin Breton, 71990 Hoareau", "birthdate": "1967-09-25", "age": 55, "interests": ["Lecture", "Photo", "Musique", "Sport", "Technologie"], "user_image_url": "/random_avatar/user_5.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                