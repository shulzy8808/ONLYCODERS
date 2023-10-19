This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ONLYCODER.NET ASSESSMENT
  ### Overview
  The repo is my solution to the assessment for the ONLYCODERS.net which consists of three levels, but on running the code the homepage would first be open where you would be asked to login or register, I have integrated this code with the Google Provider, so that users can log in if the have a gmail account, then after user has been authneticated they would then be able to access the main page which is the sample page, and I have added a bit of interactivity where users can comment and like a post. The side menus like the Quest, Badge, Newest Members and Popular Groups all fetch their information from the database which is mapped to the sample page to make it maintainable.
  
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Level 1: Front-End
This part of my project was designed to look like the sample that was given.

### Technologies Used
  - HTML5
  - CSS3
  - JavaScript
  - ReactJS

### Project Structure
The main structure of this project are contained in:
  - `src/:` Lies all the components of the project
  - `public/:` Directory for static assets

## Running the Project
  To view the webpage you'd first see the homepage and be required to create a login, you might be required to refresh your browser if it doesn't register at frst try, or you can log in with an existing account using your google email.

## Back-End Integration

For this stage, I have created a name, email, and password input users, which collects the user's informstion and send it to the backend for validation. It then takes in the input and save it in the database. Then you are directed to the Log in page.

### Technologies Used
 - Form-Validation: Front-end Validation

## Runnning the project
You'd first be directed to the homepage where you eould be asked to either log in or register, choosiing register would make you to be able to create an account after the accout has been created you can then go on to log i whee the backend would communicste tot the backend to get the information.

### MongoDB Integration 
For this level the information taken from the form are stored in the data base 

## Technologies Used
 - Database: MongoDB
 - JavaScript Fetch() Method
 - NextJS SWR: to fetch data for the side menus
   
## Project Structure
  The structure for this level includes:
  
  - `api/:` Contains the routes and end points
  - `models/:` Contains the database model for MongoDB
- `utils/:` contains the database connection
  

