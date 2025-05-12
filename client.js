const axios = require("axios");
const clientData = {
    "email": "vamsichandra1200@gmail.com",
    "name": "Vamsi",
    "rollNo": "AV.E.U4CSE22208",
    "accessCode": "SwuuKE",
    "clientID" : "0c4f9d81-5006-45f8-aa88-d95b523dcb6c",
    "clientSecret":"xFkfKuuurkbASknE"
}
axios.post("http://20.244.56.144/evaluation-service/auth", clientData)
    .then((response) => {
        console.log("Token generation successful:", response.data);
    })
    .catch((error) => {
        console.error("Error during token generation:", error);
    });