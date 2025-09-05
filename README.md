# Savings-Platform

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Introduction

Savings-Platform is a JavaScript project designed to help users manage their savings effectively. It provides a dashboard to view account balances, a savings calculator to determine daily savings amounts, an auto-saver feature for automated deductions, and functionalities for withdrawals and deposits. It also includes a Savings Pot where saved funds are stored, allowing for easy transfer back to the main account balance.

## Features

*   **Dashboard:** Displays the user's account balance.
*   **Savings Calculator:** Calculates the amount of money to be saved daily within a specified date range.
*   **Auto-Saver:** Automates deductions from the main account balance based on a selected pattern.
*   **Withdrawal and Deposit:** Allows users to manage funds in their account.
*   **Savings Pot:** A dedicated space for savings, with the ability to transfer funds back to the main account.
*   **Login:** (Implied, based on the provided code snippets)

## Technology Used

*   HTML
*   CSS
*   JavaScript

## Installation

This project is a front-end application and does not require a traditional installation process. To run the project:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
    (Replace `<repository_url>` with the actual URL of your repository.)

2.  **Open the project:** Navigate to the project directory in your file explorer.

3.  **Open `index.html` or the main HTML file:** Open the main HTML file (e.g., `index.html` or `main.html`) in your web browser.

## Usage

The application is designed to be used through a web browser.

### Example: Resetting Account Details

The `savings1.js` file contains a function to reset account details.

```javascript
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
```

This code snippet demonstrates how to reset account details and navigate to the main page.

### Example: Displaying Account Balance and Depositing Funds

The `sc.js` file contains code to display the account balance and deposit funds.

```javascript
let disPlayBal = localStorage.getItem("defBal");
if (disPlayBal === null){
    document.getElementById('acctBal').innerHTML =   "₦ 00"
}else{
    document.getElementById('acctBal').innerHTML =   "₦ " + disPlayBal
}

function go (){
    let overBal = localStorage.getItem('defBal')
    let inMoney = document.getElementById('depo').value;
    if (inMoney !="" && inMoney > 49){
        let newBal = parseInt(overBal) + parseInt(inMoney)
        localStorage.setItem("defBal", newBal)
        document.getElementById('acctBal').innerHTML = "₦ " + newBal
        document.getElementById('depo').value = ""
    }else{
        alert("Enter a valid amount above ₦ 49")
    }
}
```

This code retrieves the account balance from local storage, displays it, and allows users to deposit funds.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.