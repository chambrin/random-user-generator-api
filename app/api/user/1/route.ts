
            export async function GET(request: Request, res: Response) {
                const data = {"id": 1, "name": "Aur\u00e9lie du Pons", "email": "chartiermaggie@example.com", "username": "adelaide58", "job": "facteur d'instruments", "gender": "Femme", "phone_number": "02 36 44 22 15", "website": "https://masson.com/", "address": "57, avenue de Potier, 43299 Boucher", "birthdate": "1997-11-13", "age": 25, "interests": ["Animaux", "Lecture", "Photo", "Cin\u00e9ma", "Sport", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                