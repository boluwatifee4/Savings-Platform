# Savings-Platform

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Introduction

Savings-Platform is a JavaScript project designed to help users manage their savings effectively. It provides a dashboard to view account balances, a savings calculator to determine daily savings amounts, an auto-saver feature for automated deductions, and functionalities for withdrawals and deposits. It also includes a Savings Pot where saved funds are stored, allowing for easy transfers.

## Features

*   **Account Balance Display:** Displays the current account balance.
*   **Savings Calculator:** Calculates daily savings amounts.
*   **Auto-Saver:** Automates savings deductions.
*   **Withdrawals and Deposits:** Allows users to manage transactions.
*   **Savings Pot:** Stores saved funds.
*   **Reset Functionality:** Resets account details.

## Installation

This project is a front-end JavaScript application and does not require a traditional installation process like backend applications. To run this project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
    (Replace `<repository_url>` with the actual URL of your repository.)

2.  **Open the project in a web browser:** Navigate to the project directory and open the `index.html` or `main.html` file in your preferred web browser.

## Usage

The application is designed to be user-friendly. Here are some examples of how to use the key features:

**1. Viewing Account Balance:**

The account balance is displayed on the main dashboard. The `sc.js` file handles the display of the account balance.

```javascript
let disPlayBal = localStorage.getItem("defBal");
if (disPlayBal === null){
    document.getElementById('acctBal').innerHTML =   "₦ 00"
}else{
    document.getElementById('acctBal').innerHTML =   "₦ " + disPlayBal
}
```

**2. Resetting Account Details:**

The `savings1.js` file contains the code to reset account details.

```javascript
document.getElementById('acctDetails').addEventListener('click', ()=>{
    localStorage.removeItem("defBal")
    localStorage.removeItem("statements")
    localStorage.removeItem("wallet")
    window.location.href = "main.html"
})
```

**3. Deposit Functionality:**

The `sc.js` file contains the deposit functionality.

```javascript
function go (){
    let overBal = localStorage.getItem('defBal')
    let inMoney = document.getElementById('depo').value;
    if (inMoney !="" && inMoney > 49){
        let newBal = parseInt(overBal) + parseInt(inMoney)
        localStorage.setItem("defBal", newBal)
        window.location.href = "main.html"
    }
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to the Savings-Platform project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.