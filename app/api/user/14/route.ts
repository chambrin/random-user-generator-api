
            export async function GET(request: Request, res: Response) {
                const data = {"id": 14, "name": "Ren\u00e9 Pasquier", "email": "mariannechauvet@example.com", "username": "lefevrenoel", "job": "pharmacien", "gender": "Femme", "phone_number": "05 67 73 50 43", "website": "https://duhamel.fr/", "address": "66, rue de Berger, 41708 Saint Hortense", "birthdate": "2002-04-23", "age": 21, "interests": ["Lecture", "Cin\u00e9ma", "Voyages", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                