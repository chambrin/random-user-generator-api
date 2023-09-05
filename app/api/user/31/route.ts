
            export async function GET(request: Request, res: Response) {
                const data = {"id": 31, "name": "Alain Laporte", "email": "fgay@example.com", "username": "georgeschauvet", "job": "dessinateur-projeteur", "gender": "Homme", "phone_number": "+33 (0)2 61 78 06 81", "website": "https://pages.fr/", "address": "78, rue \u00c9douard Lemoine, 51136 Albert", "birthdate": "1959-08-26", "age": 64, "interests": ["Art", "Lecture", "Cin\u00e9ma", "Cuisine", "Technologie", "Animaux", "Voyages", "Sport", "Photo", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                