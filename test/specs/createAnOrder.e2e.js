const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    }); 

      it('Should set the address', async () => {
      await browser.url(`/`)
      await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
      const toField2 = await $(page.toField);
      await toField2.waitForDisplayed();
      await expect(toField2).toHaveValue('1300 1st St');
    });

    
      it('Should select suppporting plan 2', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const selectedSupportiveClass = await $(page.selectedSupportiveClass);
        await expect(selectedSupportiveClass.parentElement()).toHaveElementClass('active');
    }); 


      it('Should fill in phone number ', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
     });   


    
      it('Should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        await page.addPaymentMethodCard();
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
      });  

  

      it('Should add message for driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue("Use the Force, Luke");
        const messageField = await $(page.messageForDriver);
        await messageField.waitForDisplayed();
        await expect(messageField).toHaveValue("Use the Force, Luke");
    });  



      it('Should order blanket and handekerchief', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const blanketAndHandkerchief = await $(page.blanketAndHandkerchief);
        await blanketAndHandkerchief.waitForDisplayed();
        await blanketAndHandkerchief.click();
        await browser.pause(2000);
        await expect ($ (page.blanketAndHandkerchiefActive)).toBeChecked();
     });


      it('Should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const iceCreamPlusOne = await $(page.iceCreamPlusOne);
        await iceCreamPlusOne.waitForDisplayed();
        await iceCreamPlusOne.click();
        await iceCreamPlusOne.click();
        const iceCreamValueSelector = await $(page.iceCreamValueSelector);
        const iceCreamValue = await iceCreamValueSelector.getText();
        await expect(iceCreamValue).toBe("2");    
    }); 

      it('The car search modal should appear', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        await page.addPaymentMethodCard();
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();  
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();      
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue("Use the Force, Luke");
        const blanketAndHandkerchief = await $(page.blanketAndHandkerchief);
        await blanketAndHandkerchief.waitForDisplayed();
        await blanketAndHandkerchief.click();
        const iceCreamPlusOne = await $(page.iceCreamPlusOne);
        await iceCreamPlusOne.waitForDisplayed();
        await iceCreamPlusOne.click();
        await iceCreamPlusOne.click();
        const iceCreamValueSelector = await $(page.iceCreamValueSelector);
        const iceCreamValue = await iceCreamValueSelector.getText();
        await expect(iceCreamValue).toBe("2");    
        const enterNumberAndOrder = await $(page.enterNumberAndOrder);
        await enterNumberAndOrder.waitForDisplayed();
        await enterNumberAndOrder.click();
        await browser.pause(30000); 

        await expect($(page.driverWillArrive)).toBeExisting(); 

        
    });
});
