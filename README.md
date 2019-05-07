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

## Running status
1. Welcome page -
![screenshot from 2019-02-06 17-44-48](https://user-images.githubusercontent.com/31209617/52341437-90f4ac80-2a38-11e9-82b2-0cbf14846a7e.png)


2. Register page -

![screenshot from 2019-02-06 17-45-10](https://user-images.githubusercontent.com/31209617/52341056-9271a500-2a37-11e9-9831-9484801e50fd.png)

3. Login page -
![screenshot from 2019-02-06 17-45-20](https://user-images.githubusercontent.com/31209617/52341108-b8974500-2a37-11e9-8236-143cea71331b.png)

4. All products
![screenshot from 2019-02-06 17-45-27](https://user-images.githubusercontent.com/31209617/52341130-cb117e80-2a37-11e9-897b-33422212d124.png)

5. Bid now
![screenshot from 2019-02-06 17-46-19](https://user-images.githubusercontent.com/31209617/52341154-df557b80-2a37-11e9-8e35-0dc740f86ccb.png)

6. Bid status
![status](https://user-images.githubusercontent.com/31209617/56434076-c0554e80-62f0-11e9-841a-24e7a7a35053.png)

7. Add product
![screenshot from 2019-02-06 17-47-09](https://user-images.githubusercontent.com/31209617/52341198-feeca400-2a37-11e9-93a4-603e0324e56b.png)

8. User's profile 

![screenshot from 2019-02-06 17-47-24](https://user-images.githubusercontent.com/31209617/52341244-1330a100-2a38-11e9-8bb7-b3ae690903c5.png)

9. Product details
![productDetails](https://user-images.githubusercontent.com/31209617/56434018-969c2780-62f0-11e9-87d5-ac11befc3ad4.png)

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
 
 
