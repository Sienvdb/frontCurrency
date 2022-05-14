document.querySelector("#register-btn").addEventListener("click", e => {

    console.log("❤");
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    fetch('http://localhost:3001/api/v1/signup', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "username": username,
            "email": email,
            "password": password
        })
    }).then(response => {
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            console.log("👍");
            window.location.href = "index.html";
            
        } if(json.status === "error") {
            console.log(json.message);
            let error = document.querySelector(".error");
            error.innerHTML = json.message;
            error.classList.remove("hidden");
        }
    })
    e.preventDefault();
});




    
    
