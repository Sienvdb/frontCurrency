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
                    console.log(result[5]);

                    
                    let name = `<h4> 
                            <span class="title__firstword">${result[1]}</span>  
                            sent you 
                            <span class="title__number">${result[5]}</span> 
                            IMD-coins!
                        </h4>`;
                    let p = `<p class="transfer__message">"${result[7]}"</p>`;
                    let div = `<div class="transfer"> ${name + p}</div>`;

                    document.querySelector("#tranfer__list").innerHTML += div;
                });

                
            } if(json.status === "error") {
                console.log(json.message);
                
            }
        })
    }
}