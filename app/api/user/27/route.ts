
            export async function GET(request: Request, res: Response) {
                const data = {"id": 27, "name": "Nathalie-Martine Renard", "email": "qmace@example.net", "username": "marcelle08", "job": "charcutier-traiteur", "gender": "Homme", "phone_number": "0357456598", "website": "https://pasquier.com/", "address": "57, rue Perez, 39454 Baudry", "birthdate": "1988-04-07", "age": 35, "interests": ["Cin\u00e9ma", "Musique", "Technologie", "Lecture", "Art", "Photo", "Voyages", "Cuisine", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                