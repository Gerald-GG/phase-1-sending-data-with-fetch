// Add your code here
let userName = "Agent";
let userEmail = "agent@gmail.com";
let body = document.querySelector("body");

const submitData = (userName, userEmail) => {
    let userObj = {name: userName, email: userEmail}
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then((resp) => {
        return resp.json();
    })
    .then((resp) => {
        body.innerHTML = `<p>${DataTransfer.id}</p>`;
    })
    .catch((error) => {
        body.innerHTML = `${error.message}`;
    });
}