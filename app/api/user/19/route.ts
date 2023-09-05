
            export async function GET(request: Request, res: Response) {
                const data = {"id": 19, "name": "Susan Martineau", "email": "jeannevasseur@example.org", "username": "hrodrigues", "job": "climatologue", "gender": "Femme", "phone_number": "+33 (0)4 74 75 53 88", "website": "https://www.gonzalez.com/", "address": "47, boulevard David, 63819 Sainte ThibaultVille", "birthdate": "1993-03-23", "age": 30, "interests": ["Lecture", "Photo", "Cuisine", "Sport", "Art", "Musique", "Voyages", "Technologie", "Animaux"], "user_image_url": "/random_avatar/user_19.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                