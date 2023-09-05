
            export async function GET(request: Request, res: Response) {
                const data = {"id": 6, "name": "Augustin Lecomte", "email": "adrienne18@example.org", "username": "aguilbert", "job": "ing\u00e9nieur qualit\u00e9 moteur", "gender": "Femme", "phone_number": "+33 (0)4 49 43 62 46", "website": "https://ramos.com/", "address": "rue de Alexandre, 11158 Auger-sur-Ferreira", "birthdate": "1998-05-12", "age": 25, "interests": ["Animaux", "Voyages", "Photo", "Sport", "Musique", "Art", "Cin\u00e9ma", "Technologie"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                