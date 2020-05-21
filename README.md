# grumpy-kitten
Front-End Boot Camp Group Project

Project Team:
Richard Yee
Shalini Grassi
Mishu Bhat
Deepti Shatagopam


Project Description:
Requirements
The application must support 3 of 3 workflows. To switch between work flows consider using React Router.

Workflow 1 - Register Voters
Create a voter registration system which collects the following information from the voter: first name, last name, address, county/city, birthdate, email, and phone.

From a main screen, the user will click a "Register Voter" button. A registration form will be displayed. The user will enter the data, click "Complete Registration" and return to the main screen.

On the main screen there should be a button to display the list of registered voters.

Add the ability to delete voters, edit voters and delete multiple voters.

Add the ability to sort the voter list on a given field by clicking the column header. Only an ascending sort needs to be supported.

Use CSS modules to style the table.

Workflow 2 - Capture Votes
From the main screen, select a ballot to be used for voting. Then click a button named 'Vote' to commence the voting process.

The user will type in their identifying information. If their identifying information is valid the ballot should be shown. If the identifying information is not valid, the ballot should not be shown, and an error message should be shown. The identifying information can be anything, just pick something simple and unique to each voter.

Users are limited to voting once in an election.

The ballot should list the items under consideration with a checkbox next to each item. Checking the box is considered to be 'Yes', leaving it blank is a 'No'. You can do something more complex than a checkbox, but a checkbox is the minimum.

When the ballot is completed, the user should click a 'Cast Vote' button. A success screen is shown with a button to return to the main screen.

Use CSS grid to organize the layout of the voting screen.

Workflow 3 - Election Creation
Elections are a list of questions (one or more). Create a form to create new elections, and a table to display the elections in the system.

Each row in the table should have a 'View Results' button to see the completed ballots for a particular election.

Once created, elections cannot be modified or deleted.

Additional Requirements
The theme of the web site should match the color scheme of the mascot image.

On each page, display a header which includes the team name and mascot picture. Also, include some kind of motivational team slogan statement in the header.

Concerning state, use Redux to manage application state. Use React to manage form control state (controlled components). Please use React-Redux to connect React and Redux, and use Redux-Thunk for handling asychronous operations. Use React-Redux Hooks.

Please use React Hooks to manage local component form state.

Conditions of Victory
Three of the three workflows are completed.

There are no errors in the console.

All of the requirements are met.

Each member of the team made a significant contribution, and can describe to the instructor what they coded (this will be asked publicly during the presentation).

The application looks good. There will be some evidence of effort to make it look good and use the color theme.

Important!!!
Do not underestimate the time it will take to integrate code created by each member of the team. I recommend using a shared Git repository where you commit/push code often. Do not wait until the last minute - integration takes a lot more time than you think. Also, no Git heros, from a practical perspective you can lose code with Git, be careful and make simple code backups with copy/paste in the file system if you attempt to do anything with Git which could result in the loss of code.

Keep the database structure in db.json simple. Do not over complicate the data structure with deeply nested objects and such. Think in terms of REST services and relatively flat independent resources. Another way to think of endpoints is as database tables. Just as tables are related to each other, simple resource-based endpoints are related to each other.

Please ask me to review your project design and source code from time to time. Better to have me correct your code during development than during the presentation. Also, when you ask questions, I will attempt to help you come up with the answer on your own before giving you the answer. I will ask questions such as "do you remember when we covered such and such" to help you remember something we covered to see if you can reason your way to the answer instead of me telling you directly.

