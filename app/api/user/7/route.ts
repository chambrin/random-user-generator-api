
            export async function GET(request: Request, res: Response) {
                const data = {"id": 7, "name": "Charles du Lacroix", "email": "denisefoucher@example.net", "username": "jeanne33", "job": "agronome", "gender": "Femme", "phone_number": "+33 4 92 34 19 05", "website": "http://munoz.com/", "address": "66, chemin Carlier, 94663 Mace", "birthdate": "1984-10-19", "age": 38, "interests": ["Voyages", "Cin\u00e9ma", "Lecture", "Musique", "Sport", "Animaux", "Art", "Photo"], "user_image_url": "/random_avatar/user_7.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                