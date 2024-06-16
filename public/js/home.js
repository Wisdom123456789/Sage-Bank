let userFullName = document.getElementById("username")
let moneyToDisplay = document.getElementById("money")
let UsernameMobileFormat = document.getElementById("UsernameMobileFormat")
let showAccountNumber = document.getElementById("showAccountNumber")
let timeToDisplay = document.getElementById("updateTime")
let toDisplayProfileImage = document.getElementById("toDisplayProfileImage")
let profilepic = document.getElementById("profilepic")
let profilePicTwo = document.getElementById("profilePicTwo")
let profilePicThree = document.getElementById("profilepicThree")
let iconForProfilePicture = document.getElementById("icon-for-profile-picture")
let iconForProfilePictureOne = document.getElementById("icon-for-profile-picture-one")
let iconForProfilePictureTwo = document.getElementById("icon-for-profile-picture-two")
let iconForProfilePictureThree = document.getElementById("icon-for-profile-picture-three")
function updatingit() {
    Promise.all([
            fetch("http://localhost:1234/signUp").then((res)=>res.json()),
            fetch("http://localhost:1234/logIn").then((res)=>res.json())
        ]).then(([data, loginInfo])=>{
            
            for (let index = 0; index < data.length; index++) {
                if (data[index].id == loginInfo[0].UserId) {
                    userFullName.innerHTML = data[index].Firstname + " " + data[index].Lastname
                    UsernameMobileFormat.innerHTML = data[index].Firstname
                    moneyToDisplay.innerHTML = data[index].Amount
                    timeToDisplay.innerHTML = new Date().toLocaleDateString()
                    showAccountNumber.innerHTML = data[index].Account
                    if (data[index].ProfilePicture == "") {
                        profilepic.style.display = "none"
                        profilePicTwo.style.display = "none"
                        profilePicThree.style.display = "none"
                        iconForProfilePicture.style.display = "block"
                        toDisplayProfileImage.style.display = "none"
                        iconForProfilePictureOne.style.display = "block"
                        iconForProfilePictureTwo.style.display = "block"
                        iconForProfilePictureThree.style.display = "block"
                    } else{
                        profilepic.style.display = "block"
                        toDisplayProfileImage.style.display = "block"
                        toDisplayProfileImage.src = data[index].ProfilePicture
                        profilepic.src = data[index].ProfilePicture
                        profilePicTwo.src = data[index].ProfilePicture
                        profilePicThree.src = data[index].ProfilePicture
                        iconForProfilePictureOne.style.display = "none"
                        iconForProfilePictureTwo.style.display = "none"
                        iconForProfilePictureThree.style.display = "none"
                        iconForProfilePicture.style.display = "none"
                    }
                    fetchingData()
                    fetchingFromTransactionHistory()
                    generalFetchingAllTransactionData()
                    updatingCard()
                    checkOnCard()
                }
            }
    })
}
updatingit()
const save_div = document.getElementById("save_div")
const invest_div = document.getElementById("invest_div")
const borrow_div = document.getElementById("borrow_div")
const div_one = document.getElementById("div_one")
let div_two = document.getElementById("div_two")
let div_three = document.getElementById("div_three")
const addMoneyContainer = document.getElementById("addMoneyDiv")
const intro = document.getElementById("intro")
const nigeriaAmount = document.getElementById("nigeria-amount")
const buttonBelow = document.getElementById("button-below")
const bankTransferDiv = document.getElementById("banktransferdiv")
const cashDepositDiv = document.getElementById("cash-deposit")
const addCardMoney = document.getElementById("add-card-money")
const addCardMoneySecond = document.getElementById("add-card-money-second")
const amountToEnter = document.getElementById("amountToEnter")
const modalForAddMoney = document.getElementById("modalForAddMoney")
const amountToShowOnAddMoneyModal = document.getElementById("amountToShowOnAddMoneyModal")
function spend() {
    save_div.style.display = "none"
    invest_div.style.display = "none"
    div_one.style.display = "block"
    div_two.style.display = "block"
    borrow_div.style.display = "none"
}
function saveinfo() {
    save_div.style.display = "block"
    invest_div.style.display = "none"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
    borrow_div.style.display = "none"
}
function borrow() {
    save_div.style.display = "none"
    invest_div.style.display = "none"
    borrow_div.style.display = "block"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
}
function invest() {
    save_div.style.display = "none"
    invest_div.style.display = "block"
    borrow_div.style.display = "none"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
}
function itdisappears() {
    if (moneyToDisplay.style.filter == "blur(0px)") {
        moneyToDisplay.style.filter =  "blur(6px)";
    } else {
        moneyToDisplay.style.filter = "blur(0px)"
    }
}
function addMoneyDiv() {
    addMoneyContainer.style.display = "block"
    intro.style.display = "none"
    nigeriaAmount.style.display = "none"
    buttonBelow.style.display = "none"
    save_div.style.display = "none"
    invest_div.style.display = "none"
    borrow_div.style.display = "none"
    div_one.style.display = "none"
    div_two.style.display = "none"
    div_three.style.display = "none"
}
function addMoneyBack() {
    addMoneyContainer.style.display = "none"
    intro.style.display = "block"
    nigeriaAmount.style.display = "block"
    buttonBelow.style.display = "block"
    save_div.style.display = "none"
    invest_div.style.display = "none"
    borrow_div.style.display = "none"
    div_one.style.display = "block"
    div_two.style.display = "block"
    div_three.style.display = "none"
}
function bankTransfer() {
    bankTransferDiv.style.display = "block"
    addMoneyContainer.style.display = "none"
}
function exitBankTransferDiv() {
    bankTransferDiv.style.display = "none"
    addMoneyContainer.style.display = "block"
}
function cashDeposit() {
    addMoneyContainer.style.display = "none"
    cashDepositDiv.style.display = "block"
}
function exitCashDeposit() {
    addMoneyContainer.style.display = "block"
    cashDepositDiv.style.display = "none"
}
function addCard() {
    addCardMoney.style.display = "block"
    addMoneyContainer.style.display = "none"
}
function exitAddMouney() {
    addCardMoney.style.display = "none"
    addMoneyContainer.style.display = "block"
}
function nextPageAddMoneySecond() {
    addCardMoneySecond.style.display = "block"
    addCardMoney.style.display = "none"
}
function exitAddMoneySecond() {
    addCardMoneySecond.style.display = "none"
    addCardMoney.style.display = "block"
}
function toModalAddMoney() {
    if (amountToEnter.value == "" || amountToEnter.value < 100) {
        alert("Enter Your Amount Please or The Amount must be greater than ₦100")
    } else{
        modalForAddMoney.style.display = "block"
        amountToShowOnAddMoneyModal.innerHTML = amountToEnter.value
    }
}
function cancelModalForAddMoney() {
    modalForAddMoney.style.display = "none"
}
function makePayment() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([signUpInfo, loginInfo])=>{
        for (let index = 0; index < signUpInfo.length; index++) {
            if (signUpInfo[index].id == loginInfo[0].UserId) {
                let totalAmount = Number(signUpInfo[index].Amount) + Number(amountToEnter.value);
                FlutterwaveCheckout({
                    public_key: "FLWPUBK_TEST-ef8e7d7e4b4c4f2471fde5b914791ab6-X",
                    tx_ref: "sage48981487343MDI0NzMx",
                    amount: amountToEnter.value,
                    currency: "NGN",
                    payment_options: "card, mobilemoneyghana, ussd",
                    redirect_url: "file:///C:/Users/adeba/OneDrive/Desktop/level2%20project/html/dashboard.html",
                    meta: {
                      consumer_id: 23,
                      consumer_mac: "92a3-912ba-1192a",
                    },
                    customer: {
                      email: signUpInfo[index].Email,
                      phone_number: signUpInfo[index].Phone,
                      name: signUpInfo[index].Firstname + " " + signUpInfo[index].Lastname,
                    },
                    customizations: {
                      title: "Sage Bank",
                      description: "Payment add money into your account",
                      logo: "../pictures/SAGE_Publishing_logo_2023.svg.png",
                    }
                });
                fetch(`http://localhost:1234/signUp/${signUpInfo[index].id}`,{
                    method : "PATCH",
                    headers : {
                        "content-type" : "applications/json"
                    },
                    body : JSON.stringify({
                        Amount : totalAmount
                    })
                }).then((res)=>res.json()).then((data)=>{
                    pushingDeposit()
                })
            }
        }
    })
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-ef8e7d7e4b4c4f2471fde5b914791ab6-X",
      tx_ref: "sage48981487343MDI0NzMx",
      amount: amountToEnter.value,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: "file:///C:/Users/adeba/OneDrive/Desktop/level2%20project/html/dashboard.html",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "",
        phone_number: "",
        name: "",
      },
      customizations: {
        title: "The Titanic Store",
        description: "Payment for an awesome cruise",
        logo: "../pictures/SAGE_Publishing_logo_2023.svg.png",
      }
    });
  }
function pushingDeposit() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([signupinfo, loginInfo])=>{
        let confirmUser = signupinfo.find((el)=>el.id == loginInfo[0].UserId)
        let depositScheme = {
            Name : confirmUser.Firstname,
            Dateof : new Date().toLocaleDateString(),
            Time : new Date().toLocaleTimeString(),
            method : "Deposit",
            Amount : amountToEnter.value,
            description : "Deposit",
            depostId : confirmUser.id
        }
        if (confirmUser) {
            fetch("http://localhost:1234/deposit",{
                headers: {
                    "content-type" : "application/json"
                },
                method : "POST",
                body : JSON.stringify(depositScheme)
            })
        }
    })
}
function addingDepositHistory() {
    Promise.all([
        fetch("http://localhost:1234/deposit").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([Depositinfo, loginInfo])=>{
        let confirmUser = Depositinfo.find((el)=>el.depostId == loginInfo[0].UserId)
        if (confirmUser) {
            displayAllTransactions.innerHTML += `
                <tr>
                    <td>${confirmUser.Name}</td>
                    <td>${confirmUser.Dateof}</td>
                    <td>${confirmUser.Time}</td>
                    <td>${confirmUser.method}</td>
                    <td>${confirmUser.Amount}</td>
                    <td>${confirmUser.description}</td>
                </tr>
            `
        }
    })
}
addingDepositHistory()