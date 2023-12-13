module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber1: '//*[@id="number"]',
    cardCode1: '.card-second-row #code',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: '/html/body/div/div/div[2]/div[2]/div[1]/div[2]/div[3]/div[2]', ///html/body/div/div/div[2]/div[2]/div[1]/div[2]/div[3]/div[2]   //div=Add card
    phoneNumberModal: '.modal',
    linkCardButton: '/html/body/div/div/div[2]/div[2]/div[2]/form/div[3]/button[1]',
    closePaymentXButton: '.payment-picker .close-button',
    //selecting supporting class
    selectSupportiveClass: '/html/body/div/div/div[3]/div[3]/div[2]/div[1]/div[5]/div[2]',
    // Extra steps needed
    cardClickStrip: '.plc',
    cardPaymentMethodIcon: '/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[2]/div[2]/div[2]/img',
    messageForDriver:  '#comment',
    extraRequirements: '/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[1]/div[2]/img',
    blanketAndHandkerchief: '/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]',
    iceCreamPlusOne: '/html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[3]',
    iceCreamValueSelector: ".//div[@class='r-counter']/div/div[@class='counter-value' and text()='2']",
    enterNumberAndOrder: '/html/body/div/div/div[3]/div[4]/button',
    driverWillArrive: "//div[@class='order-body']",
    // Functions
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
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

  //below is main function for following:payment method,add card, add card #, add card code, card strip, link card, close payment button 
    addPaymentMethodCard: async function() {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();

        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();

        /*const cardNumber = await ${page.cardNumber};
        const cardTemp = helper.getFraudAlert();
        await cardNumber.setValue(cardTemp);*/   // testing random CC # generator. Attempt 1= FAILED
        
        const cardNumber = await $(this.cardNumber1);
        await cardNumber.waitForDisplayed();
        await cardNumber.setValue(7777777777777769);
        const cardCode = await $(this.cardCode1);
        await cardCode.waitForDisplayed();
        await cardCode.setValue(69);

       /*const cardNumber = wait $('page.cardNumber');
       await cardNumber.waitForDisplayed();
       await cardNumber.setValue(helper.number2); //testing random CC # generator. Delete if Fubar!!! MY ATTEMPT2= FAILED
       /* const cardTemp = helper.getFraudAlert();
        await cardNumber.setValue(cardTemp);*/  //testing random CC # generator. Delete if FUBAR!!! TEACHERS ASSISTANCE=FAILED
        
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