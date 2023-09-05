
            export async function GET(request: Request, res: Response) {
                const data = {"id": 26, "name": "Christophe Andre de la Benoit", "email": "arousseau@example.net", "username": "thibault38", "job": "designer industriel industrielle", "gender": "Femme", "phone_number": "05 63 19 39 78", "website": "https://www.antoine.com/", "address": "51, boulevard Th\u00e9odore Pr\u00e9vost, 58407 Humbert-la-For\u00eat", "birthdate": "1958-07-07", "age": 65, "interests": ["Technologie", "Lecture", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                