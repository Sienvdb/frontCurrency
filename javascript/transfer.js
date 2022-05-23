document.querySelector("#makeTransfer-btn").addEventListener("click", e => {

    console.log("❤");
    let receiver = document.querySelector("#username").value;
    let amount = document.querySelector("#amount").value;
    let reason = document.querySelector("#reason").value;
    let message = document.querySelector("#message").value;
    let tokenUser;
    let tokenId;
    let receiverId;

    try{
        fetch('https://currency-backend-mms.herokuapp.com/api/v1/username/' + receiver, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        })
        .then(response => {
            return response.json()})
        .then(data => {
            receiverId = data.data.id;
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
            tokenId = data.data.uid;
        
            fetch('https://currency-backend-mms.herokuapp.com/api/v1/transfers', {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
                body : JSON.stringify({
                    "sender": tokenUser,
                    "senderId": tokenId,
                    "receiver": receiver,
                    "receiverId": receiverId,
                    "coins": amount,
                    "reason": reason,
                    "message": message
                })
            }).then(response => { 
                return response.json();
            }).then(json => {
                if(json.status === "success") {
                    //console.log("👍👌👌");
                    window.location.href = "index.html";
                }if(json.status === "error") {
                    //console.log(json.message);
                    let error = document.querySelector(".form__error");
                    error.innerHTML = json.message;
                    error.classList.remove("form__error--hidden");
                }
            })
        
        });});
        }catch(error){
            console.log("error");
        }

    


    e.preventDefault();
});
