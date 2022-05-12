export default class App {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelector(".register-btn").addEventListener("click", this.signUp.bind(this));
        console.log("👍");
    } 

    signUp(){
        console.log("❤");
        let username = document.querySelector("#username").value;
        console.log(username);
        
    }
}