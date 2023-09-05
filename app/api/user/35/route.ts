
            export async function GET(request: Request, res: Response) {
                const data = {"id": 35, "name": "Gr\u00e9goire Delaunay Le Louis", "email": "elodie77@example.net", "username": "gbertrand", "job": "ing\u00e9nieur recherche et d\u00e9veloppement en agroalimentaire", "gender": "Femme", "phone_number": "+33 6 37 23 17 16", "website": "https://www.voisin.fr/", "address": "51, rue Manon Jacquot, 19834 Rodrigues-sur-Le Roux", "birthdate": "1998-01-20", "age": 25, "interests": ["Musique", "Cuisine", "Animaux", "Technologie", "Photo"], "user_image_url": "/random_avatar/user_35.png", "background_image_url": "https://source.unsplash.com/random/1920x1080"};

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
                