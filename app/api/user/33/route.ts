
            export async function GET(request: Request, res: Response) {
                const data = {"id": 33, "name": "Ad\u00e9la\u00efde Lecoq", "email": "ebrun@example.net", "username": "astridpottier", "job": "responsable de scierie", "gender": "Femme", "phone_number": "0324104994", "website": "http://www.cordier.org/", "address": "10, rue de Brunet, 43979 Saint Marc", "birthdate": "1993-10-02", "age": 29, "interests": ["Technologie", "Photo", "Cin\u00e9ma", "Musique", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                