
            export async function GET(request: Request, res: Response) {
                const data = {"id": 7, "name": "Lucie Leduc", "email": "clairemenard@example.com", "username": "oliviejulien", "job": "agent hydrothermal hydrothermale", "gender": "Homme", "phone_number": "0321725261", "website": "http://www.klein.fr/", "address": "rue de Gaudin, 28213 Moulin", "birthdate": "1957-11-08", "age": 65, "interests": ["Technologie", "Animaux", "Cin\u00e9ma", "Cuisine", "Art", "Musique", "Photo", "Sport", "Lecture", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                