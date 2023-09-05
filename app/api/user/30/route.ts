
            export async function GET(request: Request, res: Response) {
                const data = {"id": 30, "name": "Claudine Robert de la Guilbert", "email": "laurentle-gall@example.com", "username": "couturierthibault", "job": "juge des contentieux de la protection", "gender": "Femme", "phone_number": "0164355609", "website": "http://www.benard.net/", "address": "52, boulevard Jean Launay, 82543 Aubry", "birthdate": "1966-01-04", "age": 57, "interests": ["Art", "Technologie", "Cuisine", "Animaux", "Sport"], "user_image_url": "/random_avatar/user_30.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                