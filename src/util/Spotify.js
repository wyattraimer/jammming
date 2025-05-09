let accessToken;
const clientID = "8f06e248a7e64988b8954f001816be34";
const redirectURI = "http://127.0.0.1:3000/";

const Spotify = {
    getAccessToken() {
    if (accessToken) {
        console.log("Access token already exists:", accessToken);
        return accessToken;
    }

    console.log("Window location href:", window.location.href);

    // Try both with and without the fragment (`#`)
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    console.log("Token in URL:", tokenInURL);
    console.log("Expiry time in URL:", expiryTime);

    if (tokenInURL && expiryTime) {
        accessToken = tokenInURL[1];
        const expiresIn = Number(expiryTime[1]);
        
        window.setTimeout(() => {
            accessToken = "";
            console.log("Access token expired.");
        }, expiresIn * 1000);

        window.history.pushState("Access token", null, "/");
        console.log("Access Token fetched successfully:", accessToken);
        return accessToken;
    }

    console.warn("No token found in URL, redirecting to Spotify...");
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public%20user-read-private%20user-read-email%20user-read-playback-state%20user-library-read%20streaming&redirect_uri=${encodeURIComponent(redirectURI)}`;
    console.log("Redirecting to Spotify Login with URL:", redirect);
    window.location = redirect;
    },
    search(term){
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(term)}&type=track`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse || !jsonResponse.tracks || !jsonResponse.tracks.items) {
                console.error("Response error: No tracks found.");
                return [];
            }

            return jsonResponse.tracks.items.map(t => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri
            }));
        })

    }
}

export { Spotify };