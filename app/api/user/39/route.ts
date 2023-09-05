
            export async function GET(request: Request, res: Response) {
                const data = {"id": 39, "name": "William Diaz-Baron", "email": "madeleine29@example.org", "username": "nathalie67", "job": "chef comptable", "gender": "Homme", "phone_number": "01 73 89 26 43", "website": "https://lemoine.fr/", "address": "98, boulevard Anouk Voisin, 72493 Morin-les-Bains", "birthdate": "1969-03-03", "age": 54, "interests": ["Photo"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                