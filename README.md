# AutomationTest Using Playwright/Typescript

Instructions:

1 ) Please ensure you have node Node.js or higher and npm is installed. Otherwise, you can install npm and node.js from the following link 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2) Install playwright dependencies

npm init playwright@latest

3) Run the test using following commands ; There are total 5 tests. 3 for functional test and 2 for non-functional test.
	
	3.1) To run all test cases and generate repot in html:

			npx playwright test --reporter=html

	3.2) To run a specific test file:
	
 	      Function Test:	
                   npx playwright test -g "book a room"
		   npx playwright test -g "Submit contact form"
		   npx playwright test -g "Invalid Booking Details"
   
              Non Functional Test:
		   npx playwright test -g "Check homepage performance"
		   npx playwright test -g "basic performance navigation"

    3.3) To view results with HTML report:

          npx playwright show-report
		  
