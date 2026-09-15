import { expect, type Locator, type Page } from '@playwright/test';

export class navBar {
    // Locators
    readonly page: Page;
    readonly loginModalButton: Locator; // login button in the navigation bar
    readonly userNameInput: Locator; // email or phone number input field in the login modal
    readonly continueButton: Locator; // proceed to otp input field button in the login modal
    readonly otpInput: Locator; // otp input field base locator
    readonly loginButton: Locator; // login button after otp inout field
    readonly userGreeting: Locator; // user greeting text after successful login

    // Variables

    // Constructors
    constructor(page: Page) {
        this.page = page;
        this.loginModalButton = page.getByText('Log in');
        this.userNameInput = page.getByLabel('Please enter email or mobile number');
        this.continueButton = page.locator(':text("CONTINUE")');
        this.otpInput = page.getByRole('spinbutton');
        this.loginButton = page.getByTestId('login-button');
        this.userGreeting = page.locator('span').filter({ hasText: 'Hi, ' });
    };

    // Methods
    // Actions
    async login(userName: string, otp: string) {
        await this.loginModalButton.click(); // open login modal
        await this.userNameInput.fill(userName); // add username
        await this.continueButton.click();
        await this.fillOTP(otp); // fill otp input fields
        await this.loginButton.click(); // login
    };

    async fillOTP(otp: string) {
        for (let i = 0; i < otp.length; i++) {
            const otpDigit = otp[i];
            const otpInputField = this.otpInput.nth(i);
            await otpInputField.fill(otpDigit);
        };
    };

    // Assertions
    async assertUserGreeting() {
        await expect(this.userGreeting).toBeVisible();
    };

};