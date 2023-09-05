
            export async function GET(request: Request, res: Response) {
                const data = {"id": 28, "name": "Anouk Renault", "email": "lucy29@example.com", "username": "blindorothee", "job": "charg\u00e9 de recherche en acoustique musicale", "gender": "Homme", "phone_number": "+33 5 63 51 03 32", "website": "http://www.jacques.net/", "address": "89, avenue de Colas, 97264 Lemonnier-les-Bains", "birthdate": "1993-11-10", "age": 29, "interests": ["Lecture", "Voyages", "Technologie", "Animaux"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                