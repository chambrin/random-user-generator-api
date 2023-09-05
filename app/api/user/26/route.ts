
            export async function GET(request: Request, res: Response) {
                const data = {"id": 26, "name": "Alfred Fleury", "email": "lacombejeannine@example.com", "username": "thierry10", "job": "enseignant sp\u00e9cialis\u00e9 sp\u00e9cialis\u00e9e", "gender": "Homme", "phone_number": "0535069849", "website": "https://lebreton.fr/", "address": "7, rue Andre, 07303 Duhamel", "birthdate": "1965-09-29", "age": 57, "interests": ["Lecture", "Cin\u00e9ma", "Art", "Photo", "Sport", "Voyages", "Technologie", "Cuisine", "Musique", "Animaux"], "user_image_url": "/random_avatar/user_26.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                