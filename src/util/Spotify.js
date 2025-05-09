let accessToken;
const clientID = "8f06e248a7e64988b8954f001816be34";
const redirectURI = "http://127.0.0.1:3000";

const Spotify = {
    getAccessToken(){
        if(accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if(tokenInURL && expiryTime){
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);
            //make it so the access token(AT) will expire after the value of expiration time
            window.setTimeout(() => {
                accessToken = ""
            }, expiresIn*1000);
            //clear URL after AT expires
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }
        //redirects users to login to their Spotify account with our apps info
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public%20user-read-private%20user-read-email%20user-read-playback-state%20user-library-read&redirect_uri=${redirectURI}`;
        //link in window where we want them to be redirected to
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