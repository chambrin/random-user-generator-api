
            export async function GET(request: Request, res: Response) {
                const data = {"id": 32, "name": "Thibaut Regnier", "email": "lucas36@example.com", "username": "ilefort", "job": "entra\u00eeneur sportif sportive", "gender": "Homme", "phone_number": "0149327224", "website": "https://www.peron.com/", "address": "570, avenue Nicole Rousset, 62402 Mahe", "birthdate": "1997-10-01", "age": 25, "interests": ["Photo", "Art", "Musique", "Cuisine", "Technologie", "Sport", "Voyages", "Animaux", "Cin\u00e9ma", "Lecture"], "user_image_url": "/random_avatar/user_32.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                