
            export async function GET(request: Request, res: Response) {
                const data = {"id": 23, "name": "Claudine Lenoir", "email": "elisabethaubry@example.net", "username": "antoinedanielle", "job": "sociologue", "gender": "Homme", "phone_number": "03 63 94 62 26", "website": "https://guillet.com/", "address": "avenue Tessier, 71955 Fischer-les-Bains", "birthdate": "1978-08-04", "age": 45, "interests": ["Musique", "Cin\u00e9ma"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                