
            export async function GET(request: Request, res: Response) {
                const data = {"id": 30, "name": "\u00c9douard Meyer Le Dumont", "email": "alexandre25@example.net", "username": "riouhortense", "job": "responsable de r\u00e9mun\u00e9ration", "gender": "Homme", "phone_number": "+33 (0)2 36 93 20 13", "website": "https://www.fleury.net/", "address": "18, rue de Morel, 11493 Sainte Constance", "birthdate": "1982-07-17", "age": 41, "interests": ["Musique", "Voyages", "Technologie", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                