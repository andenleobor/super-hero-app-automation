import * as assert from 'assert';
// Pages
import LoginPage from '../pages/login.page';


describe('Login test suite', () => {
    /**
    * Valid email: 1@2.com
    * Valid password: password
    **/
    it.skip('should display error when password is missing', async () => {
        browser.url('/');
        await LoginPage.emailInput.setValue('test@test.com');
        await LoginPage.submitBtn.click();
        assert.equal(await browser.isAlertOpen(), true);
        assert.equal(await browser.getAlertText(), 'Please enter an email and password');
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false);
    });

    it.skip('should display error when email is missing');
    it.skip('should display error when email and password are missing');

    it.skip('should display error when email is incorrect', async () => {
        browser.url('/');
        await LoginPage.emailInput.setValue('test@test.com');
        await LoginPage.passwordInput.setValue('fake');
        await LoginPage.submitBtn.click();
        assert.equal(await browser.isAlertOpen(), true);
        assert.equal(await browser.getAlertText(), 'Invalid email and password');
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false);
        await browser.pause(3000);
    });

    it.skip('should display error when password is incorrect');
    it.skip('should display error when password case is incorrect');

    it.skip('should login with valid email and password', async () => {
        browser.url('/');
        await LoginPage.emailInput.setValue('1@2.com');
        await LoginPage.passwordInput.setValue('password');
        await LoginPage.submitBtn.click();
        assert.equal(await LoginPage.overlay.isDisplayed(), false);
        await browser.pause(3000);
    });

    it.skip('should remember login credentials');
});
