export default class App {
    constructor() {
        this.getCoins();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelector("#logout").addEventListener("click", this.logout.bind(this));
    }

    getCoins() {
        //console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')) {
            window.location.href = "login.html";
        } else { 
            fetch('https://currency-backend-mms.herokuapp.com/api/v1/getCoins', {
                method: "get",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            }).then(response => {
                return response.json();
            }).then(json => {
                if(json.status === "success") {
                    //console.log("👍👌👌");
                    document.querySelector("#user-coins").innerHTML = json.data.coins;
    
                    
                } if(json.status === "error") {
                    console.log(json.message);
                    
                }
            })
        }

        
    }

    logout(e) {
        /*console.log("✨");
        let test = localStorage.getItem('token');
        console.log(test);*/
        window.localStorage.removeItem('token');
        window.location.href = "login.html";
    }
}