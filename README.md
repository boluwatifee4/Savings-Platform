# Savings-Platform

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Introduction

Savings-Platform is a JavaScript project designed to help users manage their savings effectively. It provides a dashboard to view account balances, a savings calculator to determine daily savings amounts, an auto-saver feature for automated deductions, and functionalities for withdrawals and deposits. It also includes a Savings Pot where saved funds are stored, allowing for easy transfers.

## Installation

This project is a front-end JavaScript application. To run it, you'll need a web browser.  No specific installation steps are required beyond having a modern web browser.

1.  **Clone the repository (Optional):** If you want to modify the code, clone the repository to your local machine using Git:

    ```bash
    git clone <repository_url>
    ```

2.  **Open the HTML file:** Navigate to the directory containing the project files and open the `index.html` or `main.html` file (or the main HTML file) in your web browser.

## Usage

The application is accessed through a web browser.  Here are some examples of how to interact with the Savings-Platform:

**1. Viewing Account Balance:**

The `sc.js` file retrieves and displays the account balance from local storage.

```javascript
let disPlayBal = localStorage.getItem("defBal");
if (disPlayBal === null){
    document.getElementById('acctBal').innerHTML =   "₦ 00"
}else{
    document.getElementById('acctBal').innerHTML =   "₦ " + disPlayBal
}
```

**2. Resetting Account Details:**

The `savings1.js` file includes a function to reset account details.

```javascript
document.getElementById('acctDetails').addEventListener('click', ()=>{
    localStorage.removeItem("defBal")
    localStorage.removeItem("statements")
    localStorage.removeItem("wallet")
    window.location.href = "main.html"
})
```

**3. Deposit Functionality:**

The `sc.js` file includes a deposit function.

```javascript
function go (){
    let overBal = localStorage.getItem('defBal')
    let inMoney = document.getElementById('depo').value;
    if (inMoney !="" && inMoney > 49){
        let newBal = parseInt(overBal) + parseInt(inMoney);
        localStorage.setItem("defBal", newBal)
        window.location.reload()
    }else{
        alert("Enter a valid amount")
    }
}
```

## Features

*   **Account Balance Display:** Displays the current account balance.
*   **Savings Calculator:** Calculates daily savings amounts.
*   **Auto-Saver:** Automated deductions for savings.
*   **Withdrawal Functionality:** Allows users to withdraw funds.
*   **Deposit Functionality:** Allows users to deposit funds.
*   **Savings Pot:** Stores saved funds.
*   **Account Reset:** Resets account details.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.