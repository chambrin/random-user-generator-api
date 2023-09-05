
            export async function GET(request: Request, res: Response) {
                const data = {"id": 24, "name": "Matthieu de la Garnier", "email": "gruiz@example.com", "username": "nguyenamelie", "job": "charg\u00e9 des m\u00e9thodes outils et qualit\u00e9 en informatique", "gender": "Femme", "phone_number": "0241484178", "website": "http://www.chartier.fr/", "address": "13, rue de Coste, 48626 Sainte Louis", "birthdate": "1960-06-21", "age": 63, "interests": ["Photo", "Technologie", "Cuisine", "Musique", "Lecture", "Animaux", "Sport", "Art", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                