import * as assert from 'assert';
// Pages
import HeaderPage from '../pages/header.page';
import LoginPage from '../pages/login.page';


describe('Header test suite', () => {
    it('It should redirect to a new site', async () => {
        browser.url('/');
        await LoginPage.emailInput.setValue('1@2.com');
        await LoginPage.passwordInput.setValue('password');
        await LoginPage.submitBtn.click();

        await HeaderPage.linkLink.click();
        assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/');
    });

    it.only('Should open wolverine modal', async () => {
        browser.url('/');
        await LoginPage.emailInput.setValue('1@2.com');
        await LoginPage.passwordInput.setValue('password');
        await LoginPage.submitBtn.click();

        await HeaderPage.heroFactsLink.click();
        await HeaderPage.wolverineOption.click();

        await browser.pause(1000);

        assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), true);
        assert.equal(await HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact');
        assert.equal(await HeaderPage.wolverineModalContentText.getText(), 'Wolverine made his first comic book appearance in 1974.');

        await HeaderPage.wolverineModalCloseBtn.click();

        await browser.pause(1000);

        assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), false);
    });

    // TODO: SpiderMan modal
    // TODO: Search
});
