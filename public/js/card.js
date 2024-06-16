const getACard = document.getElementById('getACard')
const insideCardPage = document.getElementById('insideCardPage')
const modalForCardPage = document.getElementById("modalForCardPage")
const cardContainer = document.getElementById("cardContainer")
const pinOne = document.getElementById("pinOne")
const pinTwo = document.getElementById("pinTwo")
const showCard = document.getElementById("showCard")
const inputPinOne = document.getElementById('inputPinOne')
const inputPinTwo = document.getElementById('inputPinTwo')
const inputPinThree = document.getElementById('inputPinThree')
const inputPinFour = document.getElementById('inputPinFour')
const first = document.getElementById("first")
const cardNumber = document.getElementById("cardNumber")
const cvvNumber = document.getElementById("cvvNumber")
const cardUsername = document.getElementById("cardUsername")
const cardHolderName = document.getElementById("cardHolderName")
const fourValuesOne = document.getElementById("fourValuesOne")
const fourValuesTwo = document.getElementById("fourValuesTwo")
const fourValuesThree = document.getElementById("fourValuesThree")
const fourValuesFour = document.getElementById("fourValuesFour")
function sageCard() {
    insideCardPage.style.display = "none"
    getACard.style.display = "block"
}
function goBackToCardPage() {
    insideCardPage.style.display = "block"
    getACard.style.display ="none"
}
function getVirtualCard() {
    cardContainer.style.display = 'block'
    getACard.style.display = "none"
}
function goBackToGetACard() {
    cardContainer.style.display = "none"
    getACard.style.display = "block"
}
function paymentForCard() {
    if (pinOne.value != pinTwo.value) {
        alert("Please, Your pin have to be thesame")
    } else if (pinOne.value == "" || pinTwo.value == "") {
        alert("Please, fill in the informations")
    } else if (pinOne.value.length > 4 || pinOne.value.length < 4) {
        alert("Pin must be 4 values")
    }
     else {
        modalForCardPage.style.display = "block"
    }
}
function cancelModal() {
    modalForCardPage.style.display = "none"
}
function confirmModal() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([data, loginInfo])=>{
        for (let index = 0; index < data.length; index++) {
            let userpin = data[index].PIN
            let splituserpin = userpin.split("")
            let newAmount = data[index].Amount - 1000
            if (data[index].id == loginInfo[0].UserId && inputPinOne.value == splituserpin[0] && inputPinTwo.value == splituserpin[1] && inputPinThree.value == splituserpin[2] && inputPinFour.value == splituserpin[3]) {
                if (data[index].Amount < 1000) {
                    alert("You do not have sufficient balance")
                } else{
                    fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                    headers : {
                        "content-type" : "application/json"
                    },
                    method : "PATCH",
                    body : JSON.stringify({
                        Amount : newAmount
                    })
                    }).then((res)=>res.json()).then((card)=>{
                        modalForCardPage.style.display = "none"
                        insideCardPage.style.display = "none"
                        getACard.style.display = "none"
                        cardContainer.style.display = "none"
                        showCard.style.display = "block"
                        postingCardInfo()
                    })
                }
            }
        }
    })
}
function movingToNext() {
    if (inputPinOne.value.length == 1) {
        inputPinTwo.focus()
    }
    if (inputPinTwo.value.length == 1) {
        inputPinThree.focus()
    }
    if (inputPinThree.value.length == 1) {
        inputPinFour.focus()
    }
}
function movingToPrev() {
    if (inputPinFour.value.length == 0) {
        inputPinThree.focus()
    }
}
function postingCardInfo() {
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((loginInfo)=>{
            for (let index = 0; index < data.length; index++) {
                let cardInfo = {
                    CardId : data[index].id,
                    cardNumber : Math.floor(Math.random() * 10000000000000000)
                }
                if (data[index].id == loginInfo[0].UserId) {
                    fetch("http://localhost:1234/card",{
                        headers : {
                            "content-type" : "application/json"
                        },
                        method : "POST",
                        body : JSON.stringify(cardInfo)
                    })   
                }
            }
        })
    })
}
function checkOnCard() {
    Promise.all([
        fetch("http://localhost:1234/logIn").then((res)=>res.json()),
        fetch("http://localhost:1234/card").then((res)=>res.json())
    ]).then(([loginInfo, cardInfo])=>{
        for (let index = 0; index < cardInfo.length; index++) {
            if (cardInfo[index].CardId == loginInfo[0].UserId) {
                modalForCardPage.style.display = "none"
                insideCardPage.style.display = "none"
                getACard.style.display = "none"
                cardContainer.style.display = "none"
                showCard.style.display = "block"
            }
        }
    })
}
function updatingCard() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/card").then((res)=>res.json())
    ]).then(([data, cardInformation])=>{
        for (let index = 0; index < data.length; index++) {
            for (let i = 0; i < cardInformation.length; i++) {
                let cardnumber = cardInformation[i].cardNumber
                let stringcard = String(cardnumber)
                let splitCardNumber = stringcard.split("")
                if (cardInformation[i].CardId == data[index].id) {
                    cardHolderName.innerHTML = data[index].Firstname + " " + data[index].Lastname
                    fourValuesOne.innerHTML = splitCardNumber[0] + splitCardNumber[1] + splitCardNumber[2] + splitCardNumber[3]
                    fourValuesTwo.innerHTML = splitCardNumber[4] + splitCardNumber[5] + splitCardNumber[6] + splitCardNumber[7]
                    fourValuesThree.innerHTML = splitCardNumber[8] + splitCardNumber[9] + splitCardNumber[10] + splitCardNumber[11]
                    fourValuesFour.innerHTML = splitCardNumber[12] + splitCardNumber[13] + splitCardNumber[14] + splitCardNumber[15]
                }
            }
        }
    })
}