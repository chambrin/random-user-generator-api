
            export async function GET(request: Request, res: Response) {
                const data = {"id": 13, "name": "Julien Meyer", "email": "davidblanc@example.org", "username": "claire74", "job": "directeur d'office de tourisme", "gender": "Homme", "phone_number": "0444686916", "website": "https://www.hardy.fr/", "address": "62, rue J\u00e9r\u00f4me Perrot, 34469 Colletnec", "birthdate": "1997-09-29", "age": 25, "interests": ["Voyages", "Photo", "Musique", "Animaux", "Technologie", "Sport", "Lecture"], "user_image_url": "/random_avatar/user_13.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                