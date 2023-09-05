
            export async function GET(request: Request, res: Response) {
                const data = {"id": 24, "name": "Josette Loiseau", "email": "jacques60@example.net", "username": "kmarie", "job": "ing\u00e9nieur environnement et risques industriels", "gender": "Homme", "phone_number": "+33 4 75 36 84 95", "website": "http://ruiz.com/", "address": "7, avenue Poirier, 42109 Sainte JosephVille", "birthdate": "2003-03-22", "age": 20, "interests": ["Technologie", "Lecture", "Cin\u00e9ma", "Cuisine"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                