export default class App {
    constructor() {
        this.getCoins();
    }

    getCoins() {

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
                console.log("👍👌👌");
                
            } if(json.status === "error") {
                console.log(json.message);
                
            }
        })
    }
}