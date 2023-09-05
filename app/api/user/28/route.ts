
            export async function GET(request: Request, res: Response) {
                const data = {"id": 28, "name": "Nathalie Le Bonneau", "email": "christiane25@example.net", "username": "jmarion", "job": "g\u00e9ochimiste", "gender": "Femme", "phone_number": "+33 (0)4 92 64 13 44", "website": "https://bruneau.com/", "address": "2, boulevard Ollivier, 11366 Sainte Gabrielle-sur-Mer", "birthdate": "1976-01-19", "age": 47, "interests": ["Cuisine", "Art", "Sport", "Technologie", "Musique"], "user_image_url": "/random_avatar/user_28.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                