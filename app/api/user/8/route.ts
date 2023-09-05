
            export async function GET(request: Request, res: Response) {
                const data = {"id": 8, "name": "Aim\u00e9 Andre", "email": "lefebvrematthieu@example.org", "username": "buissonlorraine", "job": "technicien automobile", "gender": "Homme", "phone_number": "+33 (0)5 64 32 78 87", "website": "https://gregoire.fr/", "address": "84, boulevard Gr\u00e9goire Germain, 93174 Morel-sur-Ferrand", "birthdate": "1965-03-09", "age": 58, "interests": ["Art", "Musique", "Voyages", "Animaux", "Cuisine", "Photo", "Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                