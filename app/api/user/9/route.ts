
            export async function GET(request: Request, res: Response) {
                const data = {"id": 9, "name": "Marianne-Alex Lebrun", "email": "nathalie47@example.net", "username": "ugoncalves", "job": "conseiller en g\u00e9n\u00e9tique", "gender": "Homme", "phone_number": "04 37 08 06 29", "website": "https://www.fernandez.fr/", "address": "7, rue Aubert, 65807 Verdierboeuf", "birthdate": "1958-12-26", "age": 64, "interests": ["Musique", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                