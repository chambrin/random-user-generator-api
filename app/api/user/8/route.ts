
            export async function GET(request: Request, res: Response) {
                const data = {"id": 8, "name": "Valentine Peltier-Guillot", "email": "valentine80@example.org", "username": "claude66", "job": "consultant", "gender": "Homme", "phone_number": "+33 (0)5 56 81 16 94", "website": "https://bonnet.org/", "address": "47, rue Alice Leblanc, 92893 Michel", "birthdate": "2003-07-26", "age": 20, "interests": ["Voyages", "Art", "Photo", "Cuisine", "Lecture", "Cin\u00e9ma", "Technologie", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                