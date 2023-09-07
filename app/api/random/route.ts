export async function GET(request: Request, res: Response) {
    try {
        let allUsersResponse = await fetch("https://random-user-generator-api-chambrin.vercel.app/api/user/all");
        if (!allUsersResponse.ok) {
            throw new Error(`HTTP error! status: ${allUsersResponse.status}`);
        }
        let allUsers = await allUsersResponse.json();

        let randomId = Math.floor(Math.random() * allUsers.length);
        let randomUser = allUsers[randomId];

        return new Response(JSON.stringify(randomUser), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
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
