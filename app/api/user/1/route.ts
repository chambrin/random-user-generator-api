
            export async function GET(request: Request, res: Response) {
                const data = {"id": 1, "name": "Fran\u00e7oise Marty", "email": "andree25@example.net", "username": "paulette35", "job": "installateur en t\u00e9l\u00e9coms", "gender": "Femme", "phone_number": "0188021043", "website": "http://www.carlier.com/", "address": "63, chemin Thibault Mend\u00e8s, 10851 Delahaye-la-For\u00eat", "birthdate": "1971-03-06", "age": 52, "interests": ["Art", "Musique", "Voyages", "Technologie", "Cin\u00e9ma", "Sport", "Cuisine", "Animaux", "Lecture", "Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                