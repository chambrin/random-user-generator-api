
            export async function GET(request: Request, res: Response) {
                const data = {"id": 16, "name": "Xavier Pruvost", "email": "beguegenevieve@example.org", "username": "vincent32", "job": "ing\u00e9nieur \u00e9coconcepteur \u00e9coconceptrice", "gender": "Femme", "phone_number": "04 26 90 43 06", "website": "http://moreno.net/", "address": "94, avenue de Bernier, 44256 Sainte Brigitte", "birthdate": "1970-08-14", "age": 53, "interests": ["Art", "Cin\u00e9ma", "Lecture", "Animaux", "Voyages", "Sport"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                