// // Add your code here
// function submitData(name, email) {
//     fetch("http://localhost:3000/dogs/", configurationObject)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data));
// }

//const { config } = require("chai")

// const formData = {
//     dogName: "name",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData)
// };

function submitData(userName, userEmail) {
   

        let users = {
            name: userName,
            email: userEmail,
        }

    const configurationObject = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(users)
    }

    return fetch("http://localhost:3000/users/", configurationObject)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        console.log(data.id)
        let p = document.createElement("p")
        p.textContent = `id: ${data.id}`
        document.querySelector("body").append(p)
    }).catch( (e) => {
        console.log(e.message)
        let errorP = document.createElement("p")
        errorP.textContent = `error: ${e.message}`

    })

};













// document.addEventListener("DOMContentLoaded", submitData);