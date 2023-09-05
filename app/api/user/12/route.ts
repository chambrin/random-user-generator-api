
            export async function GET(request: Request, res: Response) {
                const data = {"id": 12, "name": "Ana\u00efs Lefort", "email": "csanchez@example.org", "username": "marcel67", "job": "conducteur de travaux", "gender": "Homme", "phone_number": "+33 4 72 09 41 94", "website": "https://costa.net/", "address": "73, chemin Denise Blanchard, 08118 Ledoux", "birthdate": "1982-06-08", "age": 41, "interests": ["Technologie", "Cin\u00e9ma", "Musique", "Voyages", "Photo", "Lecture", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                