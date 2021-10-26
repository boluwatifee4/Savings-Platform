document.getElementById('reset').addEventListener('click', ()=>{
    document.querySelector('.reset').style.display="flex"
})
document.getElementById('hideReset').addEventListener('click', ()=>{
    document.querySelector('.reset').style.display="none"
})

document.getElementById('acctDetails').addEventListener('click', ()=>{
    localStorage.removeItem("defBal")
    localStorage.removeItem("statements")
    localStorage.removeItem("wallet")
    window.location.href = "main.html"
})
document.getElementById('generalDetails').addEventListener('click', ()=>{
    localStorage.removeItem("defBal")
    localStorage.removeItem("statements")
    localStorage.removeItem("wallet")
    localStorage.removeItem("userData")
    localStorage.removeItem("wallet")
    localStorage.removeItem("Sna")
    window.location.href = "index.html"
})

