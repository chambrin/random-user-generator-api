
            export async function GET(request: Request, res: Response) {
                const data = {"id": 9, "name": "Arnaude Voisin", "email": "laetitiavoisin@example.net", "username": "aimee04", "job": "ing\u00e9nieur r\u00e9servoir", "gender": "Homme", "phone_number": "0563078273", "website": "https://garnier.com/", "address": "85, boulevard Seguin, 44764 Sainte Margot-sur-Mer", "birthdate": "1981-08-21", "age": 42, "interests": ["Art"], "user_image_url": "/random_avatar/user_9.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                