
            export async function GET(request: Request, res: Response) {
                const data = {"id": 36, "name": "Am\u00e9lie Millet", "email": "gabriel90@example.com", "username": "nrodrigues", "job": "m\u00e9t\u00e9orologiste", "gender": "Femme", "phone_number": "06 31 45 18 19", "website": "http://www.pasquier.com/", "address": "chemin de Riou, 51258 Sainte Christelle", "birthdate": "1972-09-06", "age": 50, "interests": ["Technologie", "Musique", "Animaux", "Cin\u00e9ma", "Cuisine", "Voyages", "Art", "Sport", "Lecture", "Photo"], "user_image_url": "/random_avatar/user_36.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                