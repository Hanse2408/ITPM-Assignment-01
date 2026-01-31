# IT3040 Assignment 1 - SwiftTranslator Automation

This repository contains the automated test suite for **Assignment 1 (IT3040-ITPM)**. The project uses **Playwright** to test the functional accuracy and UI stability of the Singlish-to-Sinhala translation system at [SwiftTranslator.com](https://www.swifttranslator.com/).

**Student ID:** IT23813298

 Prerequisites

Before running the tests, ensure you have the following installed on your machine:
* **Node.js** (v14 or higher) - [Download Here](https://nodejs.org/)
* **NPM** (Included with Node.js)

 Installation Instructions

1.  **Clone the Repository** (or unzip the project folder):
    ```bash
    git clone <YOUR_REPOSITORY_LINK_HERE>
    cd <YOUR_PROJECT_FOLDER_NAME>
    ```

2.  **Install Dependencies**:
    Run the following command to install Playwright and other required packages:
    ```bash
    npm install
    ```

3.  **Install Browsers**:
    Playwright needs specific browser binaries to run the tests. Install them using:
    ```bash
    npx playwright install
    ```

## ▶️ How to Run the Tests

You can execute the test suite using the following commands in your terminal (VS Code Terminal or Command Prompt).

### 1. Run All Tests (Headless Mode)
This runs all test cases in the background without opening a browser window.
```bash
**npx playwright test***