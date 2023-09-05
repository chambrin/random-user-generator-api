
            export async function GET(request: Request, res: Response) {
                const data = {"id": 34, "name": "Fran\u00e7ois du Ollivier", "email": "lagardevalentine@example.com", "username": "astrid08", "job": "conducteur d'engins forestiers de r\u00e9colte en entreprises de travaux forestiers", "gender": "Homme", "phone_number": "0354019329", "website": "https://www.duval.fr/", "address": "boulevard Emmanuel Launay, 66352 Guyon-les-Bains", "birthdate": "1986-11-14", "age": 36, "interests": ["Cuisine", "Animaux", "Technologie", "Photo", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                