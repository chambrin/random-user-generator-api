
            export async function GET(request: Request, res: Response) {
                const data = {"id": 5, "name": "Gabriel-Ren\u00e9 Didier", "email": "paulinegeorges@example.com", "username": "charles25", "job": "ing\u00e9nieur math\u00e9maticien", "gender": "Femme", "phone_number": "+33 (0)3 39 18 84 17", "website": "https://duval.fr/", "address": "299, rue Berthelot, 75627 PascalBourg", "birthdate": "1985-03-11", "age": 38, "interests": ["Animaux", "Art", "Cin\u00e9ma", "Technologie", "Lecture", "Sport", "Musique", "Photo", "Cuisine", "Voyages"], "user_image_url": "/random_avatar/user_5.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                