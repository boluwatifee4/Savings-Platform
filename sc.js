let disPlayBal = localStorage.getItem("defBal");
if (disPlayBal === null){
    document.getElementById('acctBal').innerHTML =   "₦ 00"
}else{
    document.getElementById('acctBal').innerHTML =   "₦ " + disPlayBal
}

// localStorage.setItem("ShowBal",OriginalBal);
// let defBal = 500
// localStorage.setItem("defACCBal", defBal)
function go (){
    let overBal = localStorage.getItem('defBal')
    let inMoney = document.getElementById('depo').value;
    if (inMoney !="" && inMoney > 49){
        let storedBal = localStorage.getItem("defBal")
        let balance =  Number(inMoney) + Number(storedBal)
        localStorage.setItem("defBal", balance)
        alert("transaction successful")
        var textNode = document.getElementById("state").innerHTML ="ON "+ new Date() +" " + " DEPOSIT WAS MADE"
        localStorage.setItem("statements", textNode)
window.location.href = 'main.html'
    }else{
        alert("Oops sorry an error occured or wrong inputs")
    } 

}
let disStatements = localStorage.getItem("statements");
document.getElementById('states').innerHTML = disStatements

function minus (){
    let overBal = localStorage.getItem('defBal')
  let withVal =  document.getElementById('with').value
  if(withVal !="" && withVal >49 && withVal < overBal){
    let withStoredBal = localStorage.getItem("defBal");
    let wBar = Number(withStoredBal)-Number(withVal)
    localStorage.setItem("defBal", wBar)
        alert("transaction successful")
        var textNode = document.getElementById("state").innerHTML ="ON "+ new Date() +" " + " WITHDRAWAL WAS MADE"
        localStorage.setItem("statements", textNode)
        window.location.href = 'main.html'
  }else {
      alert("Oops sorry an error occured or wrong inputs")
  }
}







function validateLogin(uName, pWord, data) {
    return data.entranceName === uName && data.Key === pWord;
};


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccount = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault()
        loginForm.classList.add("form--hidden");
        createAccount.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        loginForm.classList.remove("form--hidden");
        createAccount.classList.add("form--hidden");
    });
});

let gDetails = [];
function run() {
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    let goal = document.getElementById("goal").value
    let goalName = document.getElementById("inputS").value
    if (goal != "") {
        if (start != "") {
            if (end != "") {
                let begin = new Date(start)
                let finish = new Date(end)
                daysToSave = (finish.getTime() - begin.getTime()) / (1000 * 60 * 60 * 24)
                let money = goal / daysToSave;
                alert("You Are To Save " + Math.ceil(money) + " Naira" + " daily to get your " + goalName)
                localStorage.setItem('storedGoal', money)


            }
            else {
                alert("Please Fill The Finish Date Box")
            }
        }
        else {
            alert("Please Fill The Start Date Box")
        }
    }
    else {
        alert("Please Fill The Goal Amount Box")
    }


}




