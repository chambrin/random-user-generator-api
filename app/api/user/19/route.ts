
            export async function GET(request: Request, res: Response) {
                const data = {"id": 19, "name": "Alexandre Benard", "email": "de-oliveiravictor@example.org", "username": "lemairealexandria", "job": "s\u00e9rigraphe", "gender": "Femme", "phone_number": "+33 1 49 88 16 06", "website": "https://www.blin.fr/", "address": "49, rue Raymond, 95288 Blondel", "birthdate": "1987-01-09", "age": 36, "interests": ["Voyages", "Photo", "Lecture", "Animaux", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                