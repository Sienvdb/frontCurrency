document.querySelector("#login-btn").addEventListener("click", e => {

    console.log("❤");
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(email);
    console.log(password);

    fetch('http://localhost:3001/api/v1/login', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            "email": email,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            console.log("👍👌👌");
        } else {
            console.log("😒😒");
        }
    })

    e.preventDefault();
});
