document.querySelector("#login-btn").addEventListener("click", e => {

    console.log("❤");
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

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
            //console.log("👍👌👌");
            window.location.href = "index.html";
        } if(json.status === "error") {
            //console.log(json.message);
            let error = document.querySelector(".error");
            error.innerHTML = json.message;
            error.classList.remove("hidden");

            if(email == "" || json.message == "No user found with this email") {
                document.querySelector("#email").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#email").classList.replace("input__field__error", "input__field");
            }

            if(password == "" || json.message == "Password is incorrect") {
                document.querySelector("#password").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#password").classList.replace("input__field__error", "input__field");
            }
        }
    })

    e.preventDefault();
});
