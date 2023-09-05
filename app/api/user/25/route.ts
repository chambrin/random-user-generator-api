
            export async function GET(request: Request, res: Response) {
                const data = {"id": 25, "name": "Fran\u00e7ois Leleu de la Rivi\u00e8re", "email": "chauveaupaul@example.com", "username": "pasquiermarine", "job": "pilote de ligne", "gender": "Homme", "phone_number": "0360461329", "website": "http://pinto.org/", "address": "444, chemin Navarro, 66207 Leclercq", "birthdate": "1984-12-17", "age": 38, "interests": ["Cin\u00e9ma", "Technologie", "Photo", "Art", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                