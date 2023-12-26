module.exports = {

    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber1: '//*[@id="number"]',
    cardCode1: '.card-second-row #code',

    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: '.pp-plus',
    phoneNumberModal: '.modal',
    linkCardButton: '.pp-buttons > button:nth-child(1)',
    closePaymentXButton: '.payment-picker .close-button',
  
    selectSupportiveClass: 'div.tcard:nth-child(5) > div:nth-child(3)',
    selectedSupportiveClass: 'div.tcard:nth-child(5) > button:nth-child(1)',

    cardClickStrip: '.plc',
    cardPaymentMethodIcon: '.pp-value-container > img:nth-child(1)',
    messageForDriver:  '#comment',
    extraRequirements: '.reqs-arrow > img:nth-child(1)',
    blanketAndHandkerchief: '.r-sw',
    blanketAndHandkerchiefActive: '.switch-input',
    iceCreamPlusOne: '.counter-plus',
    iceCreamValueSelector: ".//div[@class='r-counter']/div/div[@class='counter-value' and text()='2']",
    enterNumberAndOrder: '.smart-button',
    driverWillArrive: '.order-body',
    
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
   
        await browser.setupInterceptor();
        await $(this.nextButton).click();

        await browser.pause(2000);
        const codeField = await $(this.codeField);

        const requests = await browser.getRequests();

        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },


    addPaymentMethodCard: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        
        const cardNumber = await $(this.cardNumber1);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(7777777777777769);
        const cardCode = await $(this.cardCode1);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(69);
        
        const cardClickStrip = await $(this.cardClickStrip);
        await cardClickStrip.waitForDisplayed;
        await cardClickStrip.click();
        
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();

        const closePaymentXButton = await $(this.closePaymentXButton);
        await closePaymentXButton.waitForDisplayed();
        await closePaymentXButton.click();
    }
};