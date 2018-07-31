# pinocchio
Pinocchio = Puppetter + AI. To make manual QA more effective and fun.

Bussines Case

This project tries to mix latest modern tools for web application test automation and machine learning techniques.
This is project DOES NOT intend to replace the work of a QA or developer manually testing a web application. 
The intent is to leverage this work but helping that person automate the more routine tasks and speed uop the
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

THe first and most obvious problem is how to scan for acceptable changes fast. So, our first trivial use of machine learning
will be the finding of the changes in the images using clustering.

Technology

This project depends on Node.js an d Python (Anaconda installation recommended).
The primary tools for running test is Puppetter.
The sample application is done with Angular.
The UI is done using Redux/React.

Installation / Run

npm install / npm start.
(more explanations will be added shortly)

