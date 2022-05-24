export default class Transfer {
    constructor() {
        this.getTransfers();
    }

    getTransfers() {

        let tokenUser;
        fetch('https://currency-backend-mms.herokuapp.com/api/v1/token', {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
        })
    .then(response => {
        return response.json()})
    .then(data => {
        tokenUser = data.data.username;
        //console.log(tokenUser);

        fetch('https://currency-backend-mms.herokuapp.com/api/v1/transfers', {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        }).then(response => {
            return response.json();
        }).then(json => {
            if(json.status === "success") {
                //console.log(json.data.transfer);
                let transfer = json.data.transfer.reverse();
                
                for(let i = 0; i < transfer.length; i++) {
                    
                    let date = transfer[i].date;
                    let getDate = date.split('T')[0];

                    if(transfer[i].sender == tokenUser) {
                        let name = `<h4> 
                                    You have sent<span class="title__firstword--receiver">${transfer[i].receiver}</span>  
                                    <span class="title__number">${transfer[i].coins}</span> 
                                    IMD-coins!
                                </h4>`;
                        let message = `<p class="transfer__message">Reason for coins: ${transfer[i].reason}</p>
                                       <p class="transfer__message">"${transfer[i].message}"</p>`;
                        let datetime = `<div class="transfer__date">
                                            <p class="date__date">${getDate}</p>
                                        </div>`;
                        let div = `<div class="transfer"> ${name + message + datetime}</div>`;

                        document.querySelector("#tranfer__list").innerHTML += div;

                    } else if(transfer[i].sender != tokenUser) {
                        let name = `<h4> 
                                        <span class="title__firstword">${transfer[i].sender}</span>  
                                        sent you 
                                        <span class="title__number">${transfer[i].coins}</span> 
                                        IMD-coins!
                                    </h4>`;
                        let message = `<p class="transfer__message">Reason for coins: ${transfer[i].reason}</p>
                                        <p class="transfer__message">"${transfer[i].message}"</p>`;
                        let datetime = `<div class="transfer__date">
                                            <p class="date__date">${getDate}</p>
                                        </div>`;
                        let div = `<div class="transfer"> ${name + message + datetime}</div>`;

                        document.querySelector("#tranfer__list").innerHTML += div;
                    }
                }            

            } if(json.status === "error") {
                console.log(json.message);
                
            }
        })
        })
    }
}