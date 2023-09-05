
            export async function GET(request: Request, res: Response) {
                const data = {"id": 35, "name": "Guy Renaud", "email": "alphonseraymond@example.org", "username": "robinstephanie", "job": "animateur socioculturel socioculturelle", "gender": "Femme", "phone_number": "0546672767", "website": "https://www.leblanc.org/", "address": "15, rue Oc\u00e9ane Clerc, 05832 Meunier", "birthdate": "1962-10-01", "age": 60, "interests": ["Photo", "Technologie", "Lecture", "Musique", "Animaux", "Voyages", "Cin\u00e9ma", "Sport", "Art"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                