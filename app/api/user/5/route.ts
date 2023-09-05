
            export async function GET(request: Request, res: Response) {
                const data = {"id": 5, "name": "Martin Roussel", "email": "noemi24@example.net", "username": "bbodin", "job": "a\u00e9rodynamicien", "gender": "Homme", "phone_number": "+33 (0)4 38 43 30 63", "website": "http://klein.fr/", "address": "6, boulevard de Torres, 60990 Ferrand", "birthdate": "1980-09-21", "age": 42, "interests": ["Lecture", "Photo", "Cuisine", "Cin\u00e9ma", "Sport", "Musique", "Art", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                