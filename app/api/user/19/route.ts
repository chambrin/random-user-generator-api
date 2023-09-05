
            export async function GET(request: Request, res: Response) {
                const data = {"id": 19, "name": "Vincent-Daniel Dupont", "email": "marguerite99@example.net", "username": "guichardcapucine", "job": "juge d'instruction", "gender": "Homme", "phone_number": "+33 (0)3 62 48 25 40", "website": "http://michel.net/", "address": "6, rue de Simon, 93240 Allard", "birthdate": "1960-04-07", "age": 63, "interests": ["Photo", "Animaux", "Cuisine", "Technologie", "Voyages", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                