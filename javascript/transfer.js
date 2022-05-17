document.querySelector("#makeTransfer-btn").addEventListener("click", e => {

    e.preventDefault();
    console.log("❤");
    let receiver = document.querySelector("#username").value;
    let amount = document.querySelector("#amount").value;
    let reason = document.querySelector("#reason").value;
    let message = document.querySelector("#message").value;

    fetch('http://localhost:3001/api/v1/transfers', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body : JSON.stringify({
            "sender": "sien",
            "senderId": 9,
            "receiver": receiver,
            "receiverId": 5,
            "coins": amount,
            "reason": reason,
            "message": message
        })
    }).then(response => { 
        console.log("ok1")
        return response.json();
    }).then(json => {
        if(json.status === "success") {
            //console.log("👍👌👌");
            window.location.href = "index.html";
        }if(json.status === "error") {
            //console.log(json.message);
            let error = document.querySelector(".error");
            error.innerHTML = json.message;
            error.classList.remove("hidden");
        }
    })

    e.preventDefault();
});
