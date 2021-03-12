const APIController = (function() {
  const client_id = 'd12cb13f0ff24997bc1aaa83c9a2b850'; // Your client id
  const client_secret = ""

  const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
  }

  const _getGenres = async (token) => {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.categories.items;
  }

  const _getPlaylistByGenre = async (token, genreId) => {

    const limit = 10;
    
    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.playlists.items;
  }

const _getTracks = async (token, tracksEndPoint) => {

    const limit = 10;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.items;
  }

const _getTrack = async (token, trackEndPoint) => {

    const result = await fetch(`${trackEndPoint}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data;
  }

return {
    getToken() {
        return _getToken();
    },
    getGenres(token) {
        return _getGenres(token);
    },
    getPlaylistByGenre(token, genreId) {
        return _getPlaylistByGenre(token, genreId);
    },
    getTracks(token, tracksEndPoint) {
        return _getTracks(token, tracksEndPoint);
    },
    getTrack(token, trackEndPoint) {
        return _getTrack(token, trackEndPoint);
    }
  }
})();


// var client_secret = ''; // Your secret
// var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
// const randomstring = require("randomstring");
// const crypto = require("crypto");
// const base64url = require("base64url");

// const code_verifier = randomstring.generate(128);

// const base64Digest = crypto
//   .createHash("sha256")
//   .update(code_verifier)
//   .digest("base64");

// console.log(base64Digest);

// const code_challenge = base64url.fromBase64(base64Digest);

// console.log(code_challenge);

// import randomstring from "fictional-random-string-generator";
// import { encode as base64encode } from "base64-arraybuffer";

// const code_verifier = randomstring.generate(128);

// async function generateCodeChallenge(codeVerifier) {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(codeVerifier);
//   const digest = await window.crypto.subtle.digest("SHA-256", data);
//   //
// }

// import randomstring from "fictional-random-string-generator";
// import { encode as base64encode } from "base64-arraybuffer";

// const code_verifier = randomstring.generate(128);

// async function generateCodeChallenge(codeVerifier) {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(codeVerifier);
//   const digest = await window.crypto.subtle.digest("SHA-256", data);
//   const base64Digest = base64encode(digest);
//   // you can extract this replacing code to a function
//   return base64Digest
//     .replace(/\+/g, "-")
//     .replace(/\//g, "_")
//     .replace(/=/g, "");
// }

// generateCodeChallenge(code_verifier).then(challenge => {
//     console.log(challenge);
//   });

// const http = require('http');

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);

// // Generates a request for scopes user-read-private and user-read-email
// app.get('/login', function(req, res) {
// var scopes = 'user-read-private user-read-email';
// res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=' + my_client_id +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent(redirect_uri));
// });

// function dataAPI() {
//     fetch(),
//     "methods": "GET",
//     "client_id": 'd12cb13f0ff24997bc1aaa83c9a2b850',

// }

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });