
            export async function GET(request: Request, res: Response) {
                const data = {"id": 36, "name": "Beno\u00eet Da Silva Le Berger", "email": "olopes@example.com", "username": "antoine65", "job": "sapeur-pompier", "gender": "Femme", "phone_number": "+33 (0)2 21 51 21 71", "website": "https://www.schneider.com/", "address": "299, avenue Garcia, 61835 Vasseur-sur-Bonnin", "birthdate": "1967-03-06", "age": 56, "interests": ["Animaux", "Cin\u00e9ma", "Technologie", "Voyages", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                