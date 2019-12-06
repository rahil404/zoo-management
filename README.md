## Zoo-management

**Description:** This is a ReactJS web-app for the management of animals of a zoo. With a modern looking graphical user interface designed with Bootstrap, the user can add new animal groups (e.g. Penguin) and specific animals belonging to a group (e.g Paul (Penguin group)). This relationship (i.e. between groups and animals) and the data is all stored in a JSON object. The user can also view the last date of medical checkup of a specific animal. With the **UPDATE** button the user can update the medical checkup date with the current date. The user can delete a group which eventually deletes all the animals belonging to that group as well. A specific animal only can also be deleted. Two dummy records of animals and groups are already inserted to give a first look of the app as soon as someone visits the website. **react-router-dom** was used in order to navigate the user to different pages. As this is a small project, I did not use Redux for the management of states. The app is published here http://rahil404.github.io/zoo-management/

**Instructions for installing the app:**

1. Clone or download the repository.
2. Prerequisites:
    1. Node.js (Installation: https://nodejs.org/en/download/)
    2. Yarn (Installation: https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Navigate to this directory through terminal and run `yarn install` to get the dependecies installed. Finally, run `yarn start` which will start the app in port 3000.
