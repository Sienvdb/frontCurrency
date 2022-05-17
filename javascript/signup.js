document.querySelector("#register-btn").addEventListener("click", e => {
    //console.log("❤");
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
        if(json.status === "succes") {
            let token = json.data.token;
            localStorage.setItem("token", token);

            window.location.href = "index.html";
            
        } if(json.status === "error") {
            //console.log(json.message);
            let error = document.querySelector(".form__error");
            error.innerHTML = json.message;
            error.classList.remove("form__error--hidden");

            if(firstname == "") {
                document.querySelector("#firstname").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#firstname").classList.replace("input__field__error", "input__field");
            }

            if(lastname == "") {
                document.querySelector("#lastname").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#lastname").classList.replace("input__field__error", "input__field");
            }

            if(username == "") {
                document.querySelector("#username").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#username").classList.replace("input__field__error", "input__field");
            }

            if(email == "" || json.message == "Email must contain @student.thomasmore.be") {
                document.querySelector("#email").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#email").classList.replace("input__field__error", "input__field");
            }

            if(password == "") {
                document.querySelector("#password").classList.replace("input__field", "input__field__error");
            } else {
                document.querySelector("#password").classList.replace("input__field__error", "input__field");
            }
        }
    })
    e.preventDefault();
});