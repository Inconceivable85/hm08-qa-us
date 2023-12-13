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

    it('should wait for the taxi driver', async () => {
        //call the taxi to the address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');

      //below selects supportive class(ugly blue van chosen)
      const selectSupportiveClass = await $(page.selectSupportiveClass);
      await selectSupportiveClass.waitForDisplayed();
      await selectSupportiveClass.click();
    //PASSED
    
      await browser.pause(2000);

       await page.addPaymentMethodCard();
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
      //PASSED
        

      await browser.pause(2000);

        //input the phone number - not button
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        //PASSED

      await browser.pause(2000);   //standard pause code. DELETE AFTER EACH TEST TO AVOID SLOWDOWN

        //adding a credit card - button - /html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[2]/div[1] / 

        //writing a message for the driver - #comment[value='Use the Force, Luke']
        const messageForDriver = await $(page.messageForDriver);
        await messageForDriver.waitForDisplayed();
        await messageForDriver.setValue("Use the Force, Luke");
      //PASSED

        await browser.pause(2000);
        
        //sellectors - blankets and handkerchiefs /html/body/div/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]/div/span
       const blanketAndHandkerchief = await $(page.blanketAndHandkerchief);
       await blanketAndHandkerchief.waitForDisplayed();
       await blanketAndHandkerchief.click();
      //PASSED
       //await blanketAndHandkerchiefToggle.click();
       await browser.pause(2000);


        //ordering 2 ice creams - .counter-plus    .counter-value = 2
        const iceCreamPlusOne = await $(page.iceCreamPlusOne);
        await iceCreamPlusOne.waitForDisplayed();
        await iceCreamPlusOne.click();
        await iceCreamPlusOne.click();

        await browser.pause(1000);

        const iceCreamValueSelector = await $(page.iceCreamValueSelector);
        const iceCreamValue = await iceCreamValueSelector.getText();
        await expect(iceCreamValue).toBe("2");    //PASSED

                /*const twoCreams = await $(page.iceCreamValue);
        const creamPie = await twoCreams.getText();
        await expect(creamPie).toBe("2); - FAILED*/
        
        
        /*const iceCreamValue = await iceCreamPlusOne.getText();
        await expect(iceCreamValue).toBeEqual("2");*/ //FAILED

        //await browser.pause(2000);

        const enterNumberAndOrder = await $(page.enterNumberAndOrder);
        await enterNumberAndOrder.waitForDisplayed();
        await enterNumberAndOrder.click();
      //PASSED
        await browser.pause(40000); //long pause bc my network takes FOREVER.
        
                                    //toEqual;?
        //the care search modal apears

        await expect($(page.driverWillArrive)).toBeExisting();


        //(optional)
    })
});
