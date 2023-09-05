export async function GET(request: Request, res: Response) {
    let randomId = Math.floor(Math.random() * 40) + 1; // generate a random number between 1 and 40
    let url = `http://localhost:3001/api/user/${randomId}`; // replace with your API's URL

    // Fetch the user's data
    try {
        let userResponse = await fetch(url);
        if (!userResponse.ok) {
            throw new Error(`HTTP error! status: ${userResponse.status}`);
        }
        let data = await userResponse.json();

        // Return the user's data
        return new Response(JSON.stringify(data), {
            status: 200,

        });
    } catch(e) {
        console.log('Error fetching user:', e);

        return new Response(JSON.stringify({error: 'An error occurred'}), {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        })
    }
}
