module.exports = {
    getPhoneNumber: function(countryCode) {
        const number = Math.floor(1000000000 + Math.random() * 9000000000)
        return `${countryCode}${number}`
    },
    getElementByText: async function(obj) {
        return await $(`div=${obj.toString()}`);
    }
};

//attempt at random CC number generator
 /*   getFraudAlert: function()  {
        const number2 = Math.random() * 9000000000000000
        return number2
    }*/
    