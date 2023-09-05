
            export async function GET(request: Request, res: Response) {
                const data = {"id": 4, "name": "Danielle-Fran\u00e7oise Charpentier", "email": "ugay@example.net", "username": "eric72", "job": "concepteur-r\u00e9dacteur", "gender": "Femme", "phone_number": "0559595110", "website": "https://www.barbier.fr/", "address": "82, chemin de Blanchet, 08483 Fernandez", "birthdate": "1958-03-17", "age": 65, "interests": ["Lecture", "Photo", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                