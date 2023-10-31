import  { Page, expect } from  '@playwright/test';
import { testConfig } from '../../testConfig';

export class LoanApplyForm{
    readonly page: Page;


    constructor( page : Page ){
        this.page = page;
    }

    async visit(){
        await this.page.goto('');
    }
    async validateUrl(url){
        await expect(this.page).toHaveURL(url);        
    }
    async validatePageTitle(pageTitle: string){
        await expect(this.page).toHaveTitle(pageTitle);
    }
    async validateWizardTitleIsVisible(title: string){
        await expect(this.page.getByRole('heading', { name: title })).toBeVisible();
    }
    async validateWizardTitleIsNotVisible(title: string){
        await expect(this.page.getByRole('heading', { name: title })).not.toBeVisible();
    }
    async clickButton(buttonTitle: string){
        if (buttonTitle == 'years') {
            await this.page.getByRole('button', { name: '5+ years' }).click();
            } 
        else if (buttonTitle == 'reason'){
            await this.page.getByRole('button', { name: 'One-off purchase' }).click();
        }
        else if (buttonTitle == 'nameTitle'){
            await this.page.getByRole('button', { name: 'Mr', exact: true }).click();
        }
        else if (buttonTitle == 'continue'){
            await this.page.locator('#continue-button').click();
            return;
        }
    }
    async enterAmount(){
        await this.page.getByPlaceholder('£1,000 to £50,000').fill(testConfig.amount);
        await this.clickButton('continue');
    }
    async enterName(){
        await this.page.locator('#firstName').fill(testConfig.firstName);
        await this.page.locator('#lastName').fill(testConfig.lastName);
        await this.clickButton('continue');
    }
    async enterDateOfBirth(){
        await this.page.locator('#dateOfBirth').fill(testConfig.dateOfBirth);
        await this.clickButton('continue');
    }
    async enterEmail(){
        await this.page.locator('#emailAddress').fill(testConfig.emailAddress);
        await this.clickButton('continue');
    }
    async enterPhoneNumber(number: string){
        await this.page.locator('#mobileNumber').fill(number);
        await this.page.locator('#mobileNumber').press('Tab');
    }
    async validatePhoneNumberPassesFormValidation(){
        await expect(this.page.getByText('Enter a valid UK mobile phone number')).not.toBeVisible();
        await this.validateUrl(/marital-status/);
        // await expect(this.page).toHaveURL(/marital-status/);
        await this.validateWizardTitleIsVisible('What’s your marital status?');   
    }
    async validatePhoneNumberFailsFormValidation(){
        await expect(this.page.getByText('Enter a valid UK mobile phone number')).toBeVisible();
        await this.validateUrl(/mobile-number/);
        await this.validateWizardTitleIsNotVisible('What’s your marital status?'); 
    }

}