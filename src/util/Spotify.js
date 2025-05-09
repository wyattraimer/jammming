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
    },
}

export default Spotify