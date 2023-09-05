
            export async function GET(request: Request, res: Response) {
                const data = {"id": 11, "name": "Robert Charpentier", "email": "delannoylouis@example.com", "username": "simonalix", "job": "astrophysicien", "gender": "Femme", "phone_number": "+33 4 30 03 96 65", "website": "https://www.carre.net/", "address": "46, rue P\u00e9n\u00e9lope Robin, 84190 Allard", "birthdate": "1975-08-03", "age": 48, "interests": ["Photo", "Cin\u00e9ma", "Voyages", "Cuisine", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                