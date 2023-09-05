
            export async function GET(request: Request, res: Response) {
                const data = {"id": 32, "name": "Anouk Gonzalez", "email": "uprevost@example.org", "username": "xpineau", "job": "chef de projet sites et sols pollu\u00e9s", "gender": "Homme", "phone_number": "0160292330", "website": "https://teixeira.net/", "address": "21, avenue Vincent, 94215 Laine", "birthdate": "1952-11-27", "age": 70, "interests": ["Lecture", "Voyages", "Technologie", "Cin\u00e9ma", "Art", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                