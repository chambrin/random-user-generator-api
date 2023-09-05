
            export async function GET(request: Request, res: Response) {
                const data = {"id": 40, "name": "Gr\u00e9goire du Menard", "email": "gregoire41@example.org", "username": "monnieraudrey", "job": "responsable du soutien logistique int\u00e9gr\u00e9", "gender": "Homme", "phone_number": "04 68 14 32 85", "website": "http://legrand.com/", "address": "45, chemin de Herv\u00e9, 54116 Grenier", "birthdate": "1954-11-23", "age": 68, "interests": ["Musique", "Cuisine", "Cin\u00e9ma", "Voyages", "Animaux", "Sport", "Art", "Technologie", "Photo", "Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                