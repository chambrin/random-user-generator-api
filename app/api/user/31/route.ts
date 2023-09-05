
            export async function GET(request: Request, res: Response) {
                const data = {"id": 31, "name": "Auguste-Alphonse Payet", "email": "yvallet@example.net", "username": "raymondmorin", "job": "technicien p\u00e9trolier p\u00e9troli\u00e8re", "gender": "Homme", "phone_number": "+33 (0)7 94 06 62 49", "website": "https://collet.com/", "address": "78, boulevard de Blot, 59235 Tessier", "birthdate": "1997-11-11", "age": 25, "interests": ["Cin\u00e9ma", "Technologie", "Sport", "Voyages", "Photo", "Art", "Cuisine", "Musique", "Animaux", "Lecture"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                