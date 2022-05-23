export default class Transfer {
    constructor() {
        this.getTransfers();
    }

    getTransfers() {

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
                console.log(json.data.transfer);
                let transfer = json.data.transfer;
                let result = [];
                transfer.forEach(item=> {
                    result = [...result, ...Object.values(item)];
                    console.log(result[6]);

                    let date= result[6];
                    let getDate = date.split('T')[0];

                    let name = `<h4> 
                                    <span class="title__firstword">${result[1]}</span>  
                                    sent you 
                                    <span class="title__number">${result[5]}</span> 
                                    IMD-coins!
                                </h4>`;
                    let message = `<p class="transfer__message">"${result[7]}"</p>`;
                    let datetime = `<div class="transfer__date">
                                    <p class="date__date">${getDate}</p>
                                    <p class="date__time"> - 11:13</p>
                                </div>`;
                    let div = `<div class="transfer"> ${name + message + datetime}</div>`;

                    document.querySelector("#tranfer__list").innerHTML += div;
                });

                
            } if(json.status === "error") {
                console.log(json.message);
                
            }
        })
    }
}