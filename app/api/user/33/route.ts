
            export async function GET(request: Request, res: Response) {
                const data = {"id": 33, "name": "Bertrand Fernandez", "email": "ruizconstance@example.org", "username": "legrandantoinette", "job": "carrossier", "gender": "Homme", "phone_number": "0468838306", "website": "https://www.le.com/", "address": "6, rue Guillou, 50332 Nicolas", "birthdate": "1977-08-28", "age": 46, "interests": ["Cuisine", "Musique", "Voyages", "Technologie", "Photo", "Art", "Animaux", "Lecture"], "user_image_url": "/random_avatar/user_33.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                