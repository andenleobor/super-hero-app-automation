class LoginPage {
    get emailInput() { return $('#loginEmail') };
    get passwordInput() { return $('#loginPassword') };
    get rememberLoginCheckbox() { return $('#rememberLoginChk') };
    get submitBtn() { return $('#form-login > button') };
    get overlay() { return $('#overlay') };
}

module.exports = new LoginPage();
