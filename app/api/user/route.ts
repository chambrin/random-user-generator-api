export async function GET(request: Request) {
    const data = {
        "id": "01f0d28d69914403a5761981534c4e08",
        "name": "Margaud Le Roux-Gomez",
        "email": "chantal66@example.net",
        "username": "aimegillet",
        "job": "psychomotricien",
        "gender": "Femme",
        "phone_number": "06 16 00 52 12",
        "website": "https://www.lemaitre.org/",
        "address": "96, avenue Dorothée Barbe, 20718 Denis",
        "birthdate": "2000-04-18",
        "age": 23,
        "interests": [
            "Animaux",
            "Art",
            "Lecture",
            "Photo",
            "Cinéma",
            "Technologie",
            "Musique",
            "Sport",
            "Voyages",
            "Cuisine"
        ],
        "user_image_url": "https://thispersondoesnotexist.com/",
        "background_image_url": "https://source.unsplash.com/random/1920x1080",
        "user_image_path": "./random_people/user_01f0d28d69914403a5761981534c4e08.png"
    };

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Content-Type': 'application/json', // Make sure the content type is set to application/json
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
