// This dashboard is for navigating from one page to the other
const home_page = document.getElementById("home_page")
const send_page = document.getElementById("send_page")
const pay_page = document.getElementById("pay_page")
const card_page = document.getElementById("card_page")
const account_page = document.getElementById("account-page")
const home = document.getElementById("home")
const send = document.getElementById("send")
const receipt = document.getElementById("receipt")
const budget = document.getElementById("budget")
const card = document.getElementById("card")
const budget_page = document.getElementById("budget_page")
const account = document.getElementById("account")
const accountText = document.getElementById("account-text")
const mobileViewProfile = document.getElementById("mobile-view-profile")
const mobileHeader = document.getElementById("mobileHeader")
const generalHeader = document.getElementById('general-header')

const firebaseConfig = {
    apiKey: "AIzaSyDYQzr6lQRSLAkbu1a48gQqc-oOsTrMGlA",
    authDomain: "sage-bank-4af83.firebaseapp.com",
    projectId: "sage-bank-4af83",
    storageBucket: "sage-bank-4af83.appspot.com",
    messagingSenderId: "366173578786",
    appId: "1:366173578786:web:037b2a0e839d927b6d4c7b"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

function sendpage() {
    home_page.style.display = "none"
    send_page.style.display = "block"
    card_page.style.display = "none"
    account_page.style.display = 'none'
    pay_page.style.display = "none"
    budget_page.style.display = "none"
    send.style.color = "rgb(0,25,102)"
    send.style.borderBottom = "3px solid rgb(0, 25, 102)";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom = "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom = "none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom = "none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom = "none";
    accountText.style.color = 'rgb(192, 175, 175)'
    accountText.style.borderBottom = "none"
}
function cardpage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    card_page.style.display = "block"
    pay_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom = "none";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom = "none"
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom = "none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom = "none";
    card.style.color = "rgb(0,25,102)"
    card.style.borderBottom = "3px solid rgb(0, 25, 102)";
    accountText.style.color = 'rgb(192, 175, 175)'
    accountText.style.borderBottom = "none"
}
function homepage() {
    home_page.style.display = "block"
    send_page.style.display = "none"
    card_page.style.display = "none"
    pay_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom = "none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom = "none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom = "none";
    home.style.color = "rgb(0, 25, 102)"
    home.style.borderBottom = "3px solid rgb(0, 25, 102)"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom = "none";
    accountText.style.color = 'rgb(192, 175, 175)'
    accountText.style.borderBottom = "none"
    let mobileMedia = matchMedia("max-width: 700px")
    if (mobileMedia.matches) {
        mobileHeader.style.display = "block"
    } else {
        mobileHeader.style.display = "nnoe"
    }
}
function accountpage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    pay_page.style.display = "none"
    mobileHeader.style.display = "none"
    card_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'block'
    accountText.style.color = 'rgb(0, 25, 102)'
    accountText.style.borderBottom = "3px solid rgb(0, 25, 102)"
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom = "none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom = "none";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom = "none";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom = "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom = "none";
}
function goBackFromMobile() {
    mobileHeader.style.display = "block"
    mobileViewProfile.style.display = "none"
    home_page.style.display = "block"
    generalHeader.style.display = "block"
}
function showprofileMobile() {
    mobileHeader.style.display = "none"
    mobileViewProfile.style.display = "block"
    home_page.style.display = "none"
    generalHeader.style.display = "none"
}
function paypage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    pay_page.style.display = "block"
    card_page.style.display = "none"
    budget_page.style.display = "none"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom = "none";
    budget.style.color = "rgb(192, 175, 175)"
    budget.style.borderBottom = "none";
    receipt.style.color = "rgb(0, 25, 102)"
    receipt.style.borderBottom = "3px solid rgb(0, 25, 102)";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom = "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom = "none";
    accountText.style.color = 'rgb(192, 175, 175)'
    accountText.style.borderBottom = "none"
}
function budgetpage() {
    home_page.style.display = "none"
    send_page.style.display = "none"
    pay_page.style.display = "none"
    card_page.style.display = "none"
    budget_page.style.display = "block"
    account_page.style.display = 'none'
    send.style.color = "rgb(192, 175, 175)"
    send.style.borderBottom = "none";
    budget.style.color = "rgb(0, 25, 102)"
    budget.style.borderBottom = "3px solid rgb(0, 25, 102)";
    receipt.style.color = "rgb(192, 175, 175)"
    receipt.style.borderBottom = "none";
    home.style.color = "rgb(192, 175, 175)"
    home.style.borderBottom = "none"
    card.style.color = "rgb(192, 175, 175)"
    card.style.borderBottom = "none";
    accountText.style.color = 'rgb(192, 175, 175)'
    accountText.style.borderBottom = "none"
}
// This is home page

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

function updatingUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var docRef = db.collection("User").doc(user.email);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    userFullName.innerHTML = doc.data().Firstname + " " + doc.data().Lastname
                    UsernameMobileFormat.innerHTML = doc.data().Firstname
                    moneyToDisplay.innerHTML = doc.data().Amount
                    timeToDisplay.innerHTML = new Date().toLocaleDateString()
                    showAccountNumber.innerHTML = doc.data().Account
                    if (doc.data().ProfilePicture == "") {
                        profilepic.style.display = "none"
                        profilePicTwo.style.display = "none"
                        profilePicThree.style.display = "none"
                        iconForProfilePicture.style.display = "block"
                        toDisplayProfileImage.style.display = "none"
                        iconForProfilePictureOne.style.display = "block"
                        iconForProfilePictureTwo.style.display = "block"
                        iconForProfilePictureThree.style.display = "block"
                    } else {
                        profilepic.style.display = "block"
                        toDisplayProfileImage.style.display = "block"
                        toDisplayProfileImage.src = doc.data().ProfilePicture
                        profilepic.src = doc.data().ProfilePicture
                        profilePicTwo.src = doc.data().ProfilePicture
                        profilePicThree.src = doc.data().ProfilePicture
                        iconForProfilePictureOne.style.display = "none"
                        iconForProfilePictureTwo.style.display = "none"
                        iconForProfilePictureThree.style.display = "none"
                        iconForProfilePicture.style.display = "none"
                    }
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

updatingUser()

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
        moneyToDisplay.style.filter = "blur(6px)";
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
    } else {
        modalForAddMoney.style.display = "block"
        amountToShowOnAddMoneyModal.innerHTML = amountToEnter.value
    }
}
function cancelModalForAddMoney() {
    modalForAddMoney.style.display = "none"
}

function makePayment() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var docRef = db.collection("User").doc(user.email);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    let totalAmount = Number(doc.data().Amount) + Number(amountToEnter.value);
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
                            email: doc.data().Email,
                            phone_number: doc.data().Phone,
                            name: doc.data().Firstname + " " + doc.data().Lastname,
                        },
                        customizations: {
                            title: "Sage Bank",
                            description: "Payment add money into your account",
                            logo: "../pictures/SAGE_Publishing_logo_2023.svg.png",
                        }
                    });
                    var washingtonRef = db.collection("User").doc(user.email);

                    // Set the "capital" field of the city 'DC'
                    return washingtonRef.update({
                        Amount: totalAmount
                    })
                        .then(() => {
                            console.log("Document successfully updated!");
                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

function pushingDeposit() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var docRef = db.collection("User").doc(user.email);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    // Add a new document in collection "cities"
                    db.collection("Deposit").doc().set({
                        Name: doc.data().Firstname,
                        Dateof: new Date().toLocaleDateString(),
                        Time: new Date().toLocaleTimeString(),
                        method: "Deposit",
                        Amount: amountToEnter.value,
                        description: "Deposit",
                    })
                        .then(() => {
                            console.log("Document successfully written!");
                        })
                        .catch((error) => {
                            console.error("Error writing document: ", error);
                        });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

function addingDepositHistory() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
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
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}

// This is Send Page

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
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}