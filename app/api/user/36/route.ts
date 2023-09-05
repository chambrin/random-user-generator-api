
            export async function GET(request: Request, res: Response) {
                const data = {"id": 36, "name": "Bernard-Nicolas Arnaud", "email": "honorefabre@example.net", "username": "lucaslefort", "job": "\u00e9conomiste de la construction", "gender": "Femme", "phone_number": "0169071917", "website": "http://petitjean.com/", "address": "rue Fouquet, 18673 Lerouxboeuf", "birthdate": "1967-03-02", "age": 56, "interests": ["Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                