export default class App {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelector(".register-btn").addEventListener("click", this.signUp.bind(this));
        //console.log("👍");
    } 

    signUp(e){
        //console.log("❤");
        let firstname = document.querySelector("#firstname").value;
        let lastname = document.querySelector("#lastname").value;
        let username = document.querySelector("#username").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        /*console.log(firstname);
        console.log(lastname);
        console.log(username);
        console.log(email);
        console.log(password);*/

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
                let feedback = document.querySelector(".alert");
                feedback.textContent = "Sign up complete!";
                feedback.classList.remove('hidden');
            }
        })

        e.preventDefault();
        
    }
}