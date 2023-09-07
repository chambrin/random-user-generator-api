export async function GET(request: Request, res: Response) {
    try {
        const randomId = Math.floor(Math.random() * 40) + 1; // Génère un nombre aléatoire entre 1 et 40
        const randomUserUrl = `https://random-user-generator-api-chambrin.vercel.app/api/user/${randomId}`;

        return Response.redirect(randomUserUrl, 303); // redirection vers l'URL de l'utilisateur aléatoire
    } catch (e) {
        console.log("Error fetching user:", e);

        return new Response(JSON.stringify({ error: "An error occurred" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    }
}
