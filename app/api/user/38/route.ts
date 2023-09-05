
            export async function GET(request: Request, res: Response) {
                const data = {"id": 38, "name": "Ren\u00e9 du Dupr\u00e9", "email": "arnaude51@example.net", "username": "valentine49", "job": "assistant de gestion en PME", "gender": "Femme", "phone_number": "+33 6 34 84 58 47", "website": "https://www.lebrun.fr/", "address": "rue de Girard, 38943 Lucas-sur-Roche", "birthdate": "1993-11-06", "age": 29, "interests": ["Animaux", "Musique", "Cin\u00e9ma", "Lecture", "Technologie", "Art", "Cuisine", "Sport", "Voyages", "Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                