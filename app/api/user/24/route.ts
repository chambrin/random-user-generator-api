
            export async function GET(request: Request, res: Response) {
                const data = {"id": 24, "name": "Astrid Le Lucas", "email": "riouchristelle@example.com", "username": "tprevost", "job": "charg\u00e9 d'affaires en g\u00e9nie m\u00e9canique", "gender": "Femme", "phone_number": "01 73 93 63 96", "website": "http://www.lefebvre.com/", "address": "696, rue de Pelletier, 41652 Saint Hortense", "birthdate": "1960-05-10", "age": 63, "interests": ["Art", "Technologie", "Lecture", "Sport", "Cin\u00e9ma", "Photo", "Musique"], "user_image_url": "/random_avatar/user_24.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                