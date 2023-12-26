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
     //1 - PASS
      it('Should set the address', async () => {
      await browser.url(`/`)
      await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
      const toField2 = await $(page.toField);
      await toField2.waitForDisplayed();
      await expect(toField2).toHaveValue('1300 1st St');
    });
    //2 - PASS
    
      it('Should select suppporting plan 2', async () => {
        //call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const selectedSupportiveClass = await $(page.selectedSupportiveClass);
        await expect(selectedSupportiveClass.parentElement()).toHaveElementClass('active');
    }); 
    //3 - PASS

      it('Should fill in phone number ', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        await browser.pause(2000);
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
     });   
    //4 - PASS

    
      it('Should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        await browser.pause(2000);
        await page.addPaymentMethodCard();
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
      });  
      //5 - PASS
  

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
    //6 - PASS


      it('Should order blanket and handekerchief', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        await browser.pause(2000);
        const blanketAndHandkerchief = await $(page.blanketAndHandkerchief);
        await blanketAndHandkerchief.waitForDisplayed();
        await blanketAndHandkerchief.click();
        await browser.pause(2000);
        await expect ($ (page.blanketAndHandkerchiefActive)).toBeChecked();
     });
      //7 -PASS

      it('Should order 2 ice creams', async () => {
        //call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        const iceCreamPlusOne = await $(page.iceCreamPlusOne);
        await iceCreamPlusOne.waitForDisplayed();
        await iceCreamPlusOne.click();
        await iceCreamPlusOne.click();
        await browser.pause(1000);
        const iceCreamValueSelector = await $(page.iceCreamValueSelector);
        const iceCreamValue = await iceCreamValueSelector.getText();
        await expect(iceCreamValue).toBe("2");    
    }); 
    //8 - PASS

      it('The car search modal should appear', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const selectSupportiveClass = await $(page.selectSupportiveClass);
        await selectSupportiveClass.waitForDisplayed();
        await selectSupportiveClass.click();
        await browser.pause(2000);
        await page.addPaymentMethodCard();
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
        await browser.pause(2000);
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await browser.pause(2000);
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue("Use the Force, Luke");
        await browser.pause(2000);
        const blanketAndHandkerchief = await $(page.blanketAndHandkerchief);
        await blanketAndHandkerchief.waitForDisplayed();
        await blanketAndHandkerchief.click();
        await browser.pause(2000);
        const iceCreamPlusOne = await $(page.iceCreamPlusOne);
        await iceCreamPlusOne.waitForDisplayed();
        await iceCreamPlusOne.click();
        await iceCreamPlusOne.click();
        await browser.pause(1000);
        const iceCreamValueSelector = await $(page.iceCreamValueSelector);
        const iceCreamValue = await iceCreamValueSelector.getText();
        await expect(iceCreamValue).toBe("2");    
        const enterNumberAndOrder = await $(page.enterNumberAndOrder);
        await enterNumberAndOrder.waitForDisplayed();
        await enterNumberAndOrder.click();
        await browser.pause(30000); 

        await expect($(page.driverWillArrive)).toBeExisting(); 
        //9 - PASS

        
    });
});
