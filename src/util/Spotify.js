let accessToken;

const Spotify = {
    getAccessToken(){
        if(accessToken) return accessToken;
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
    },
}

export default Spotify