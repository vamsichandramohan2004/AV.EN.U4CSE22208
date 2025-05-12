const axios = require("axios");
const regData = {
  "email": "vamsichandra1200@gmail.com",
  "name": "Vamsi",
  "rollNo": "AV.E.U4CSE22208",
  "mobileNo": "9390006903",
  "githubUsername": "vamsichandramohan2004",
  "collegeName": "Amrita Vishwa Vidyapeetham",
  "accessCode": "SwuuKE"
}

axios.post("http://20.244.56.144/evaluation-service/register", regData)
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error("Error during registration:", error);
  });