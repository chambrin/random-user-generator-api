
            export async function GET(request: Request, res: Response) {
                const data = {"id": 14, "name": "Thierry Mary", "email": "antoinette02@example.org", "username": "gaillardsylvie", "job": "professeur dans l'enseignement agricole", "gender": "Homme", "phone_number": "05 96 79 91 59", "website": "https://www.normand.fr/", "address": "rue Marc Delaunay, 84883 Le Goff-sur-Bouvet", "birthdate": "1964-10-17", "age": 58, "interests": ["Cin\u00e9ma", "Art", "Voyages", "Photo", "Lecture", "Animaux", "Musique", "Technologie"], "user_image_url": "https://thispersondoesnotexist.com/", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                