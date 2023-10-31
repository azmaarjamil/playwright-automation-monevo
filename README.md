# Monevo Assignment

In this task we will be filling details on a Loan Approval form and we need to check the form validation with valid phone number along with invalid phone number.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Built With

- Playwright
- NodeJS
- Typescript
- NPM as Build Tool
- VS Code


### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```

### Installation

1. Clone the repo using below URL

```sh
https://github.com/azmaarjamil/playwright-automation-monevo
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```
3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

<!-- USAGE EXAMPLES-->

## Usage

- For Browser Configuration, change required parameters in `playwright.config.ts`.
- To run test execte:

```JS
npm run test 
```

- For executing test suite on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change `--project=Firefox` against `test:` in `package.json`, just make sure the browser name given matches the name given in `playwright.config.ts`.
- For debugging test cases add debug points, the press CNTRL+SHIFT+P and type "debug:debug npm script", on the edit box select desired script.

- To change your form details go to `testConfig.ts` and change the values.

## Git Branching Model

- Create new branch per feature/test 
- Commit changes often and try to describe them well
- After finishing feature or test create a Pull Request
- Share it with team members for review
- If changes are needed, the author of PR will apply them
- Merge the PR to master



## Authors

- Muhammad Azmaar Jamil 