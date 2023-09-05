
            export async function GET(request: Request, res: Response) {
                const data = {"id": 30, "name": "Corinne Descamps", "email": "alfred88@example.com", "username": "edith95", "job": "orthodontiste", "gender": "Femme", "phone_number": "+33 3 44 92 72 21", "website": "https://gilbert.fr/", "address": "70, rue Pons, 49162 Fernandez", "birthdate": "1984-08-29", "age": 39, "interests": ["Photo", "Musique"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                