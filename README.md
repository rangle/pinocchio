# pinocchio

SHORT STORY

./install.sh
./run.sh
http://localhost:3000   (pinocchio GUI)
click on Run Tests
wait enjoy
then, when back to http://localhost:3000
click on Get Tests
click on the ID of one of the test to see details (images..etc)


THIS PROJECT IS STILL JUST A DRAFT PROOF OF CONCEPT

This project tries to mix latest modern tools for web application test automation and machine learning techniques, a very hot technological trend among test automation vendors. We try to do this keepiong the tools open source and simple. This folder, stil in its infancy is going to be the repository of code, code samples and kep documents.
This is project DOES NOT intend to replace the work of a QA or developer manually testing a web application. 
The intent is to leverage this work but helping that person automate the more routine tasks and speed up the
early detection of problems.
The general idea is to allow the QA/Dev person to very easily create test that describe uses cases.
Basically, those use cases are described by specifying a sequence of clicks and inputs (mouse and keyboard).
Each action, when settled, will show up a screen that will be saved as an image.
Since the application will be tested with test data and a predictable mock of external dependencies, the screen are supposed
to be exactly the same when run under the same code and test sequence.
After a software change is introduced, test are run again and differences in images will be evaluated into two categories:
- acceptable change (due to new feature)
- non acceptable change (problem).
When the QA/Dev person approves all the changes the software change is approved and the generated images are used as baseline.
Machine learning is going to be used to tackle various different problems.

The first and most obvious problem is how to visually scan for acceptable changes or problem fast. 
To help there, our first trivial use of machine learning will be the finding of the changes in the images using clustering.
Ultimatelly, oiur end goal is to be able to predict where the change is acceptable or not. 
Of course, that is a long term goal that will take a lot ofg data and research.

Technology that is is oging to be used:

Node.js
The primary tools for running test is Puppetter.
   The name Pinocchio comes from  Pinocchio = Puppetter + AI.
The sample application is done with Angular.
The UI is done using Redux/React.
AIm ML, and computer vision libraries tools including TensoFlow, Keras, OpenCV, etc. 

How to Installation / Run  (npm install /  npm start)

The project has 4 folders, the service, the gui, the sampleapp and the machine learning folder.
all of them need npm install and npm run

which contains puppeteer may take a while to install if chromium needs to ne downloads.

1) the 'service' folder contains a simple API that allow us to run tests and get test results.
You need this running to see something working.
This project needs puppeteer and may take a while to install if chromium needs to download.
the service will run on port 3001

2) the 'gui' folder contains a React/Redux simple app to call the service to show test and test results.
it also will be used to add new tests and update existing tests.

3) The sampleapp folder has an angular sample app based on angular tutorial
very simple npm install npm start will run on port 4200 as expected

4) the "cvml" (Computer Vision and Machine Learning) contains experimental code in jupyter notebooks ,
and real code normally in python. To run this you need a python environment.
The recomendation is Anaconda. Install openCV for that.




