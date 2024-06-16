const generalSendPage = document.getElementById("general-send-page")
const sendToSagePage = document.getElementById("send-to-sage-page")
const foundUser = document.getElementById("foundUser")
const searchForUsername = document.getElementById("searchForUsername")
const searchForUserOne = document.getElementById("search-for-user-1")
let searchForUserInput = document.getElementById("searchForUserInput")
const downSendToSage = document.getElementById("down-send-to-sage")
const sendToSagePageTwo = document.getElementById("send-to-sage-page-two")
const userAccountToSend = document.getElementById("userAccountToSend")
const showBalance = document.getElementById("showBalance")
const amountToSend = document.getElementById("amounttosend")
const modalForTransaction = document.getElementById("modalForTransaction")
const toDisplayTransactionAmountTwo = document.getElementById("toDisplayTransactionAmountTwo")
const toDisplayTransactionAmount = document.getElementById("toDisplayTransactionAmount")
const sendPinOne = document.getElementById("sendpin1")
const sendPinTwo = document.getElementById("sendpin2")
const sendPinThree = document.getElementById("sendpin3")
const sendPinFour = document.getElementById("sendpin4")
const message = document.getElementById("message")
const displayAllTransactionsForSend = document.getElementById("displayAllTransactionsForSend")
const divThreeForSend = document.getElementById("div-three-for-send")
const NothingDiv = document.getElementById("NothingDiv")
let receiverId;
let searchForUserUsername;
let personSendingMoney;
function sendToSage() {
    generalSendPage.style.display = "none"
    sendToSagePage.style.display = "block"
}
function backToGeneralSendPage() {
    generalSendPage.style.display = "block"
    sendToSagePage.style.display = "none"
}
function vanish() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=> res.json()),
        fetch("http://localhost:1234/logIn").then((res)=> res.json())
    ]).then(([signUpInfo, loginInfo])=>{
        let informations = signUpInfo.find(element=> searchForUserInput.value == element.Username && element.id != loginInfo[0].UserId || searchForUserInput.value == element.Account && element.id != loginInfo[0].UserId)
        if (informations) {
            receiverId = informations.id
            searchForUserOne.style.display = "block"
            foundUser.innerHTML = informations.Firstname + " " + informations.Lastname
            foundUser.style.color = "green"
            searchForUsername.style.display = "block"
            downSendToSage.style.display = "none"
            userAccountToSend.innerHTML = informations.Firstname + " " + informations.Lastname
        } else {
            foundUser.innerHTML = "Invalid User"
            foundUser.style.color = "red"
        }
    })
}
function searchforit() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then(response => response.json()),
        fetch("http://localhost:1234/logIn").then(response => response.json())
    ]).then(([data, loginInfo])=>{
        let getInfo = data.find(element => element.id == loginInfo[0].UserId)
        if (getInfo) {
            sendToSagePage.style.display = "none"
            sendToSagePageTwo.style.display = "block"
            showBalance.innerHTML = getInfo.Amount
        }
    })
}
function sendMoney() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then(response => response.json()),
        fetch("http://localhost:1234/logIn").then(response => response.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == loginInfo[0].UserId) {
                if (amountToSend.value > data[index].Amount || amountToSend.value < 0) {
                    alert("Insufficient Balance")
                } else if (amountToSend.value == "" || message.value == "") {
                    alert("Fill in the details below")
                } else{
                    modalForTransaction.style.display = "block"
                    toDisplayTransactionAmount.innerHTML = amountToSend.value
                    toDisplayTransactionAmountTwo.innerHTML = amountToSend.value
                }
            }
        }
    })
}
function cancelModalForSend() {
    modalForTransaction.style.display = "none"
}
function confirmPaymentForSend() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then(response => response.json()),
        fetch("http://localhost:1234/logIn").then(response => response.json())
    ]).then(([data, loginInfo])=>{
        for (let i = 0; i < data.length; i++) {
            let splitUserPin = data[i].PIN.split("")
            if (data[i].id == loginInfo[0].UserId && sendPinOne.value == splitUserPin[0] && sendPinTwo.value == splitUserPin[1] && sendPinThree.value == splitUserPin[2] && sendPinFour.value == splitUserPin[3]) {
                for (let index = 0; index < data.length; index++) {
                    if (searchForUserInput.value == data[index].Username) {
                        let newAmount = Number(data[index].Amount) + Number(amountToSend.value)
                        searchForUserInput = data[index].Firstname + " " + data[index].Lastname
                        searchForUserUsername = data[index].Username
                        fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                            method : "PATCH",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body  : JSON.stringify({
                                Amount : newAmount
                            })
                        })
                    }
                    if (data[index].id == loginInfo[0].UserId) {
                        personSendingMoney = data[index].Firstname + " " + data[index].Lastname
                        let substractingAmount = data[index].Amount - amountToSend.value
                        fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                            method : "PATCH",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify({
                                Amount : substractingAmount
                            })
                        }).then((res)=>res.json()).then((update)=>{
                            alert(`You have successfully send money to ${searchForUserInput}`)
                            modalForTransaction.style.display = "none"
                            sendToSagePageTwo.style.display = "none"
                            generalSendPage.style.display = "block"
                            transactionsForSend()
                            transactionsForRecieve()
                            updatingit()
                        })

                    }
                }
            }
        }
    })
}
function nothingForPin() {
    sendPinOne.value = ""
    sendPinTwo.value = ""
    sendPinThree.value = ""
    sendPinFour.value = ""
}
function moveToNextSend() {
    if (sendPinOne.value.length == 1) {
        sendPinTwo.focus()
    }
    if (sendPinTwo.value.length == 1) {
        sendPinThree.focus()
    }
    if (sendPinThree.value.length == 1) {
        sendPinFour.focus()
    }
}
function moveToPrevSend() {
    if (sendPinFour.value.length == 0) {
        sendPinThree.focus()
    }
}

function transactionsForSend(){
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((login)=>{
            for (let index = 0; index < data.length; index++) {
                if (data[index].id == login[0].UserId) {
                    let transactionHistory = {
                        Name : searchForUserInput,
                        Method : "Sent",
                        Dateof : new Date().toLocaleDateString(),
                        Time : new Date().toLocaleTimeString(),
                        Description : message.value,
                        Amount : `- ₦${amountToSend.value}`,
                        UserTransactionId : data[index].id
                    }
                    fetch("http://localhost:1234/transactions",{
                            headers : {
                                "content-type" : "application/json"
                            },
                            method : "POST",
                            body : JSON.stringify(transactionHistory)
                    })
                    break
                }
            }
        })
    })
}
function transactionsForRecieve(){
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        for (let index = 0; index < data.length; index++) {
            if (searchForUserUsername == data[index].Username) {
                let transactionHistory = {
                    Name : personSendingMoney,
                    Method : "Recieve",
                    Dateof : new Date().toLocaleDateString(),
                    Time : new Date().toLocaleTimeString(),
                    Description : message.value,
                    Amount : `+ ₦${amountToSend.value}`,
                    UserRecieveId : receiverId
                }
                fetch("http://localhost:1234/recieveMoney",{
                        headers : {
                            "content-type" : "application/json"
                        },
                        method : "POST",
                        body : JSON.stringify(transactionHistory)
                })
                break
            }
        }
    })
}
// transactionsForRecieve()
function fetchingFromSendTransaction() {
    displayAllTransactions.innerHTML = ""
    fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/transactions").then((res)=>res.json()).then((userhistory)=>{
            for (let i = 0; i < userhistory.length; i++) {
                if (data[0].UserId == userhistory[i].UserTransactionId) {
                    displayAllTransactions.innerHTML += ` 
                        <tr>
                            <td>${userhistory[i].Name}</td>
                            <td>${userhistory[i].Dateof}</td>
                            <td>${userhistory[i].Time}</td>
                            <td>${userhistory[i].Method}</td>
                            <td style="color: red">${userhistory[i].Amount}</td>
                            <td>${userhistory[i].Description}</td>
                        </tr>
                    `
                }
            }
        })
    })
    
}
fetchingFromSendTransaction()
function fetchingFromRecieveTransaction() {
    displayAllTransactions.innerHTML = ""
    fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/recieveMoney").then((res)=>res.json()).then((userhistory)=>{
            for (let index = 0; index < data.length; index++) {
                for (let i = 0; i < userhistory.length; i++) {
                    if (data[0].UserId == userhistory[i].UserRecieveId) {
                        displayAllTransactions.innerHTML += ` 
                            <tr>
                                <td>${userhistory[i].Name}</td>
                                <td>${userhistory[i].Dateof}</td>
                                <td>${userhistory[i].Time}</td>
                                <td>${userhistory[i].Method}</td>
                                <td style="color: green">${userhistory[i].Amount}</td>
                                <td>${userhistory[i].Description}</td>
                            </tr>
                        `
                    }
                }
            }
        })
    })
}