## Introduction

Savings-Platform is a JavaScript project designed to help users manage their savings effectively. This application provides a dashboard to view account balances, a savings calculator to determine daily savings amounts, an auto-saver feature for automated deductions, and functionalities for withdrawals and deposits. It also includes a Savings Pot where saved funds are stored, allowing for easy transfers.

## Installation

This project is a front-end JavaScript application. To run this project, you will need a web browser.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/boluwatifee4/Savings-Platform.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Savings-Platform
    ```

3.  **Open `index.html` in your web browser.**

## Usage

1.  **Open the `index.html` file in your web browser.** This will load the main interface of the Savings-Platform.

2.  **View Account Balance:** The dashboard displays your current account balance.

3.  **Use the Savings Calculator:** Input the desired savings amount to calculate daily savings.

4.  **Utilize Auto-Saver:** Enable the auto-saver feature for automated deductions.

5.  **Make Withdrawals and Deposits:** Use the provided functionalities to manage your funds.

**Example Code Snippets:**

*   **Reset Button Functionality (savings1.js):**

    ```javascript
    document.getElementById('reset').addEventListener('click', ()=>{
        document.querySelector('.reset').style.display="flex"
    })
    document.getElementById('hideReset').addEventListener('click', ()=>{
        document.querySelector('.reset').style.display="none"
    })
    ```

*   **Clearing Local Storage and Redirecting (savings1.js):**

    ```javascript
    document.getElementById('acctDetails').addEventListener('click', ()=>{
        localStorage.removeItem("defBal")
        localStorage.removeItem("statements")
        localStorage.removeItem("wallet")
        window.location.href = "main.html"
    })
    ```

*   **Displaying Account Balance (sc.js):**

    ```javascript
    let disPlayBal = localStorage.getItem("defBal");
    if (disPlayBal === null){
        document.getElementById('acctBal').innerHTML =   "₦ 00"
    }else{
        document.getElementById('acctBal').innerHTML =   "₦ " + disPlayBal
    }
    ```

## Features

*   **Account Balance Dashboard:** Displays the current account balance.
*   **Savings Calculator:** Calculates daily savings amounts.
*   **Auto-Saver Feature:** Automates deductions for savings.
*   **Withdrawal Functionality:** Allows users to withdraw funds.
*   **Deposit Functionality:** Allows users to deposit funds.
*   **Savings Pot:** Stores saved funds for easy transfer.

## Contributing

This project is open for contributions. To contribute:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix.**
3.  **Make your changes and commit them.**
4.  **Submit a pull request.**