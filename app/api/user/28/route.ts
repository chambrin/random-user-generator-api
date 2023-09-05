
            export async function GET(request: Request, res: Response) {
                const data = {"id": 28, "name": "Jacques Hamel du Colin", "email": "mendesremy@example.org", "username": "oliviercapucine", "job": "secr\u00e9taire", "gender": "Femme", "phone_number": "+33 4 63 19 24 90", "website": "https://www.laporte.fr/", "address": "87, avenue Bernard, 28893 Navarroboeuf", "birthdate": "1959-03-15", "age": 64, "interests": ["Cin\u00e9ma", "Art", "Sport", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                