## About The Project
![Software][software-screenshot]
The project implements TestCafe (JavaScript-based testing tool/framework), 
in order to conduct end-to-end (E2E) testing on any client owned test environment. 

Using this project, the QA team will be responsible for:

* Verifying the working order of a software product in a start-to-finish process
* Testing from the end user’s experience by simulating real user scenarios
* Validating the system under test and its components for integration and data integrity
* Reporting the results considered to be bugs and fixes

Additionally, this project will allow the team to test the web application on different browsers.


### Built With
The following frameworks/languages/libraries are used to bootstrap this project.

[![TestCafe][TestCafe]][TestCafe-url] [![JavaScript][JavaScript]][JavaScript-url] [![HTML][HTML]][HTML-url]


## Getting Started

Here gives you instructions on setting up your project locally.

1. Clone the repository:
   ````
   git clone https://github.com/Amanimal/testcafe-js.git
   ````
2. Install dependencies, using terminal:
   ````
   cd ./testcafe-js npm install
   ````
3. Verify TestCafe is installed, using terminal:
   ````
   testcafe -v
   ````
4. Ensure the project contains the following directories/files:
   
   a. ```\reports``` directory, contains generated reports are stored for all 
   tests ran on different browsers <br/>
   b. ```\screenshots``` directory, contains screenshots of each failed test case <br/>
   c. ```\videos``` directory, contains videos of each test run 

**NOTE**: TestCafe run will automatically create ```\reports```, ```\screenshots``` and ```\videos``` directories

## Usage

Use the information below to learn how to run this project. 

### Running Tests

1. Run a test file:
   ````
   testcafe chrome mytestfile.js
   ````
2. Run a test file in live mode:
   ````
   testcafe chrome mytestfile.js --live
   ````
**NOTE**: While running in live mode, test scripts can be modified using a code editor or an IDE, simultaneously.

3. Run all tests, inside `tests` directory:
   ````
   testcafe chrome tests/*.js
   ````
**NOTE**: Browsers: `chrome`, `edge`, `firefox`, `opera` and `safari`
can be used as an argument to run tests on.

4. Run all tests using configurarion file:
   ````
   testcafe --config-file testcafe.config.js
   ````
By default, this will run all tests inside `tests` directory, on all browsers specified.

### Happy Testing!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[software-screenshot]: images/software.png
[TestCafe]: https://img.shields.io/badge/TestCafe-388e3c?style=for-the-badge&logo=testcafe&logoColor=lightblue&labelColor=black&color=black
[TestCafe-url]: https://testcafe.io/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=yellow&labelColor=black&color=black
[JavaScript-url]: https://www.w3schools.com/js/
[HTML]: https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=orange&labelColor=black&color=black
[HTML-url]: https://www.w3schools.com/html/