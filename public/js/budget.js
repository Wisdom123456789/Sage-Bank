let changeCategory = document.getElementById("changeCategory")

function categoryChange() {
    Promise.all([
        fetch("http://localhost:1234/logIn").then((res)=>res.json()),
        fetch("http://localhost:1234/history").then((res)=>res.json()),
        fetch("http://localhost:1234/transactions").then((res)=>res.json()),
        fetch("http://localhost:1234/recieveMoney").then((res)=>res.json()),
    ]).then(([logininfo, historyinfo, transactionsinfo, receiveMoneyInfo])=>{
        let checkingOne = historyinfo.find((el)=>el.UserHistoryId == logininfo[0].UserId)
        console.log(checkingOne);
        let checkingTwo = transactionsinfo.find((el)=>el.UserTransactionId == logininfo[0].UserId)
        
    })
}