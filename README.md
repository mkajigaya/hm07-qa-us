# Sprint 7 project
* In this project, Urban Grocers, a food delivery app.
* The student completed 5 tasks and wrote tests for GET, POST, PUT, and DELETE request methods.
* For each method, the student selected a single endpoint, and wrote at least 2 tests.
* Test scripts for each method can be found in separate get/post/put/deleteHandlers.test.js files in the 'tests' folder.

# Device/environment description
* Device - HP Pavilion Laptop
* OS - Windows 11 HOME
* Browser - Google Chrome Version 125.0.6422.114 (Official Build) (64-bit)
* Remote server URL generated at https://tripleten.com/trainer/qa-engineer-us/lesson/7458f15d-fef2-4cfb-99b0-d8fa495c169a/

# Tools used
* Postman
* VS Code
* GitHub
* apiDoc

# Techniques used
* Functional testing

# How to run the tests
1. Click the black recutangle button with "Start" text and copy a server address generated at the Sprint7 project page (via the link in the # Device/environment description).
2. Open 'config.js' file in 'hm07-qa-us' folder, paste the address in between the quotation marks on line 3 (example: API_URL: "https://cnt-f15723a4-0cc4-4434-9ee6-85f9daef14ee.containerhub.tripleten-services.com"), and save the change.
3. Execute the 'npx jest' command from the project directory in the terminal to run all tests. Use 'npx jest <file_name>' to run tests for a single method. 