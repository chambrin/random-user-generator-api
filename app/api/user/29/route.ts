
            export async function GET(request: Request, res: Response) {
                const data = {"id": 29, "name": "Isaac-Martin Rodriguez", "email": "danielle59@example.org", "username": "corinne21", "job": "responsable biom\u00e9trie", "gender": "Homme", "phone_number": "+33 (0)3 67 69 95 53", "website": "https://www.bernier.com/", "address": "avenue Lema\u00eetre, 38878 Sainte Timoth\u00e9eboeuf", "birthdate": "1958-08-05", "age": 65, "interests": ["Photo", "Cin\u00e9ma", "Art", "Musique", "Sport", "Animaux", "Lecture", "Technologie", "Voyages"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                