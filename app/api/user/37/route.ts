
            export async function GET(request: Request, res: Response) {
                const data = {"id": 37, "name": "Christine Brunet", "email": "djoly@example.com", "username": "alice81", "job": "toiletteur d'animaux", "gender": "Femme", "phone_number": "0214118581", "website": "http://bernard.fr/", "address": "26, boulevard Fernandez, 69935 Durand", "birthdate": "1959-11-13", "age": 63, "interests": ["Sport", "Musique", "Voyages", "Cin\u00e9ma", "Art", "Animaux", "Photo", "Technologie"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                