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

    // Assertions

};