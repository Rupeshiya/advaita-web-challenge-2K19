## advaita-web-challenge

A web app for making an auction paltform .

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Development server

Run `npm run build` for a dev server. Navigate to `http://localhost:4000/`. 
Here `npm run build` will execute the script `ng build --prod && node ./app.js` which will start the backend and frontend on localhost `4000`as defined in `package.json`

## How to use -

 1. Clone the repo `https://github.com/Rupeshiya/advaita-web-challenge.git` .
 2. If you have `angular cli` installed then after navigating to the project folder do `npm install` else install `angular cli` first using `npm install -g @angular/cli` then `npm install` (for more details follow the above given link). 
 3. Create a database on mlab and an account on sendGrid.
 4. Then in root directory of folder add a `.env` file and add the following -
  - mongoUri = "Your_mongoURI"
  - secret = 'helloworld'
  - sendgridUsername = 'Your_sendGrid_Username'
  - sendgridPassword = 'Your_sendGrid_password'
  - emailFrom = 'Your_email_for_sending_mail'
  - mailService = 'SendGrid'
 5. Now after adding all the above requirements , after navigating to the same project folder run the command `npm run build`.
 6. Open the browser and navigate to `http://localhost:4000/` to see the features.

## Things to keep in mind before using

 1. Should satisfy all the criteria as given in `How To Use` section.
 2. On doing `Bid Now` ,it will only accept the bid more than the latest bid (given jsut below the product ) as happens in the auctions.
 3. On doing `Bid Status` click - will render the bidding status just below the navbar .
 4. Any user can use all these functionalities only if loggedIn.
 
## Code distribution 

 1. Bcakend files
  - Routes folder - `server` folder
  - Database code - `models` folder
  - Passport auth - `config/passport.js`
 2. Frontend files
  - Frontend views folders - `src/app/components`
  - Angular Services files - `src/app/services`
  - Route guards - `src/app/guards`
  
 3. Path routes - `src/app/app-routing.module.ts`
 4. Some helper interface `src/app/interface.ts` and `src/app/response.ts`
 5. Dependencies - `package.json`
 6. Main driving backend code - `app.js`

## Features implemented -

 1.  Register
 2.  Sending mail on register.
 3.  Login
 4.  Restricted routes
 5.  Add Product
 6.  Delete product
 7.  Dashboard
 8.  Bidding
 9.  Current bid status
 10. User's profile
 11. Timer
 12. Logout 
 
## Tech stacks used -

 - HTML
 - CSS
 - Bootstrap
 - Node.js
 - Express
 - Mongoose
 - mlab
 - Angular


 ## Made with :heart: by **rupeshiya**
 
 
