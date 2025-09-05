# Savings-Platform

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Introduction

Savings-Platform is a JavaScript project designed to help users manage their savings effectively. It provides a dashboard to view account balances, a savings calculator to determine daily savings amounts, an auto-saver feature for automated deductions, and functionalities for withdrawals and deposits. It also includes a Savings Pot where saved funds are stored, allowing for easy transfer.

## Features

*   **Account Balance Display:** Displays the current account balance.
*   **Savings Calculator:** Calculates daily savings amounts based on user input.
*   **Automated Savings:** Auto-saver feature for automated deductions.
*   **Withdrawal and Deposit Functionality:** Allows users to withdraw and deposit funds.
*   **Savings Pot:** A dedicated space to store saved funds.
*   **Reset Functionality:** Resets account details.

## Installation

This project is a front-end JavaScript application and does not require a complex installation process. To run the project:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
    (Replace `<repository_url>` with the actual URL of your repository)

2.  **Open the project directory:**
    ```bash
    cd Savings-Platform
    ```

3.  **Open `index.html` or `main.html` in your web browser:**  The project is designed to run directly in a web browser.  No server-side setup is needed.

## Usage

To use the Savings-Platform:

1.  **Navigate to the main page:** Open `index.html` or `main.html` in your web browser.

2.  **View Account Balance:** The current account balance will be displayed on the dashboard.

3.  **Deposit Funds:** Use the deposit input field and submit to add funds.

4.  **Reset Account:** Click the "Reset" button to clear account details and start fresh.

**Example: Viewing Account Balance (sc.js)**

```javascript
let disPlayBal = localStorage.getItem("defBal");
if (disPlayBal === null){
    document.getElementById('acctBal').innerHTML =   "₦ 00"
}else{
    document.getElementById('acctBal').innerHTML =   "₦ " + disPlayBal
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.