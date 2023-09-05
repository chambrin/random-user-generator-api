
            export async function GET(request: Request, res: Response) {
                const data = {"id": 35, "name": "\u00c9douard Colin", "email": "nlaurent@example.org", "username": "lefevreconstance", "job": "administrateur judiciaire", "gender": "Homme", "phone_number": "+33 (0)3 80 36 03 09", "website": "https://www.dumont.fr/", "address": "8, rue Thomas, 43418 Sainte Philippine", "birthdate": "1988-12-19", "age": 34, "interests": ["Musique", "Lecture", "Photo", "Voyages", "Cuisine", "Technologie", "Sport", "Art", "Animaux", "Cin\u00e9ma"], "user_image_url": "/random_avatar/user_35.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                