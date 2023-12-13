1.Sprint 8 project: The goal of Project 8 is to explore, expand and utilize the concepts and ideas we've learned during Sprint 8. Using the Urban Routes URL/server, we will check the funcitonality of the app by studying the application architecture, examining the relationship between the front and back-end, and formulating automation tests. We will explore the app and write tests to check many aspects of GUI through UI testing for QA. Using javascript programming language, HTML, Selectors/locators, Node.js, VS Code, Mocha and the advanced automation techniques learned in the sprint we will investigate and run Urban Routes possibilities step by step. By doing this we can potentially save time long term and reduce the potential for human error which is likely when running repetitive tasks. We structured our tests around the QA test pyramid. Writing individual unit tests we worked our way up to End-to-End tests. Piece by piece we will work out a natural framework to tests that can run without human error(hopefully)!!!

2.Setup Before and while running the tests. Make sure you have the following software installed: First decide which wed browser/browsers you will be using. (Firefox120.0.1 (64-bit). WebdriverIO- modern testing framework for running automation tests. Ensure all dependencies are running properly. Our goal is to use identifiers to select certain locators that enable us to plan our tests. Planning and understanding which ones work best is an early bonus. As opposed to previous sprints using XML, in this sprint we are using HTML, XML and Javascript so our browser can read our tests and processes.  Node.js(v18.17.1)- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. We can use it to run JS outside of the browser. We will write tests in a structure using functions from the MOCHA library(describe,it.) We will also include matchers(toBe, toBeEqual) to check elements in our tests to show they work in the expected manner. We will test all WebPage elements(input fields, buttons, checkboxes, radio buttons, dropdowns)to ensure functionality. VS Code(Update 1.83.)-VS Code has an integrated terminal. We use VS Code to run shell commands as a CMI. This enables us to run and test Node.js, jest framework directly below our tests and avoids having to switch back and forth while testing. Git(git version 2.41.0.windows.3)- An open source command line interface. Aside form the normal interface commands Git allows us to track changes. Lastly Github- A platform and cloud-based service. 


---Describe how to start the project.

-Decide which internet driver you will be using.(FireFox 120.0.1 (64-bit))
-WebdriverIO installed(form internet)(v8)
-Link TripleTen account to  with GitHub(hm08-qa-us)
-Make sure you're in home directory(cd ~) -gitbash
-Create folder for project(mkdir projects) -gitbash
-Change to folder(cd projects) -gitbash
-Clone the correct repo( git clone git@github.com:Inconceivable85/hm08-qa-us.git) -gitbash
-Create project files in current folder(npm install) VS code/gitbash
-Initialize and create project file(npm init --yes) VS Code/gitbash
-Download WebdriverIO and its dependencies(npx wdio config) VS Code/gitbash


-Evaluate wdio.conf.js and replace URL with given-> SAVE
-Write your tests in the createAnOrder.e2e.js file located in the test/specs folder.
-Create variables that are tied to the appropriate locators. Save in necessary files.
-Use import/export procedures and needed JavaScript Modules.
-Use asychronous programming to avoid delays and failures based up loading.

-Compile, create and run tests for the following tasks to ensure programs runs efficiently without constant human interaction.
 a. Setting the address (fromField, toField)
 b. Selecting Supportive plan (SelectSupportiveClass)
 c. Filling in the phone number (phoneNumberButton,honeNumberModal)
 d. Adding a credit card (cardField, cardNumber1)
 e. Selecting credit card code and number are accepted and selected(cardCode).
 f. Writing a message for the driver(messageForDriver)
 g. Ordering a Blanket and handkerchiefs(blanketAndHandkerchief)
 h. Ordering 2 Ice creams (iceCreamPlusOne, iceCreamSelector)
 i. The car search modal appears (driverWillArrive)

 --To test go to terminal(npm run wdio)

 All tests must pass individually and then as one long test End-to-End.

 When test is finished add, commit, and finally push our changes to Github, so others can verify our work.  


 ***//Note to Tester. Because of my laptop and work firewall, even with multiple Tutors assistance, we could not get my system, GitBash, VS Code to work with the any version of Chrome for the project. I was told to send it in simply with Firefox. I hope this is acceptable. 