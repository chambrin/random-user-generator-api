
            export async function GET(request: Request, res: Response) {
                const data = {"id": 7, "name": "Antoinette Hernandez", "email": "alicemoulin@example.com", "username": "margotmunoz", "job": "responsable de la promotion des ventes", "gender": "Homme", "phone_number": "05 79 94 72 88", "website": "https://de.fr/", "address": "564, rue Sylvie Mar\u00e9chal, 66806 Lopez", "birthdate": "1973-11-07", "age": 49, "interests": ["Cuisine", "Musique", "Art", "Technologie", "Photo", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                