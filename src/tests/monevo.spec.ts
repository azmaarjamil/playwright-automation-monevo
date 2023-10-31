import { test } from '@playwright/test';
import { LoanApplyForm } from '../pages/loanApplyForm.page';
import { testConfig } from '../../testConfig';



test.describe('Monevo Test Assigment', () => {
  let loanApplyForm: LoanApplyForm;
  
  
  test.beforeEach(async ({ page }) => {

    loanApplyForm = new LoanApplyForm(page);
    // Run this code before every test
    
    
    //Go to the URl and validate the page title along with its URL
    await loanApplyForm.visit();
    await loanApplyForm.validateUrl(/.*amount/);
    await loanApplyForm.validatePageTitle('Apply for a Personal Loan up to £50k with Nerdwallet');

    //Verify the wizard title the amount page
    await loanApplyForm.validateWizardTitleIsVisible('How much would you like to borrow?');
    
  //Enter the amount and click on continue button. 
    await loanApplyForm.enterAmount();

    //Select no of years
    await loanApplyForm.clickButton('years');

    //Select reason for loan
    await loanApplyForm.clickButton('reason');

    //Select Name title prefrence
    await loanApplyForm.clickButton('nameTitle');


    //Enter first and last name
    await loanApplyForm.enterName();

    //Enter Date of Birth
    await loanApplyForm.enterDateOfBirth();

    //Enter Email
    await loanApplyForm.enterEmail();

  });


  test('Validate that phone number passes the form validation', async ({ page }) => {
    await loanApplyForm.enterPhoneNumber(testConfig.correctPhoneNumber); //Enter correct phone number
    await loanApplyForm.clickButton('continue'); 
    await loanApplyForm.validatePhoneNumberPassesFormValidation(); //Check form validations
    
  });

  test('Validate that phone number fails the form validation', async () => {
    await loanApplyForm.enterPhoneNumber(testConfig.incorrectPhoneNumber); //Enter incorrect phone number
    await loanApplyForm.validatePhoneNumberFailsFormValidation(); //Check form validations
    await loanApplyForm.clickButton('continue');
    await loanApplyForm.validatePhoneNumberFailsFormValidation(); //Check form validations

    
  });


});

