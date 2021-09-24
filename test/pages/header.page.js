class HeaderPage {
    get logoutLink() { return $('#navbarSupportedContent > ul > li:nth-child(4) > a') };
    get linkLink() { return $('#navbarSupportedContent > ul > li:nth-child(2) > a') };
    get heroFactsLink() { return $('#navbarDropdown') };
    get wolverineOption() { return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)') };
    get spiderManOption() { return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)') };
    get searchField() { return $('#search-box') };
    get searchButton() { return $('#search-form > button') };

    // Modal

    get wolverineModalWindow() { return $('#wolverineModal') };
    get wolverineModalTitleText() { return $('#wolverineModalLabel') };
    get wolverineModalContentText() { return $('#wolverineModal > div > div > div.modal-body') };
    get wolverineModalCloseBtn() { return $('#wolverineModal > div > div > div.modal-footer > button') };
    get spiderManModalWindow() { return $('#spidermanModal') };
    get spiderManModalTitleText() { return $('#spidermanModalLabel') };
    get spiderManModalContentText() { return $('#spidermanModal > div > div > div.modal-body') };
    get spiderManModalCloseBtn() { return $('#spidermanModal > div > div > div.modal-header > button') };
}

module.exports = new HeaderPage();
