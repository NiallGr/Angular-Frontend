# Dinner to Door - Full Stack Application

Food Store Application with Display, Search, Cart, Purchase Funtionality. Admin secure access with CRUD funtionality on food items. 

Built using/on :
- Java 1.8 
- Maven 
- SpringBoot
- Eclipse
- MySQL
- Angular 11
- NodeJS v12.19.0
- Cypress 
- Okta
- Visual Studio Code
- Agile Scrum Development Cycle

**Requirments: Java 1.8**


## Prebuild  
Created a workflow using the Scrum methodology: This work flow was spread out of 4 sprints, with a duration of 2 weeks in each sprint. (8 weeks total dev cycle)
This is captured in "img: 1.1"

"img: 1.1" Click on images to see more clearly. 
![Phase1_Sprint 1](https://user-images.githubusercontent.com/62908390/101273095-73cdb980-3747-11eb-8c97-00286575a5e0.JPG)
## Build
### Sprint 1 (week 1 - 2)
- Created a visual diagram outlineing the design and functionality that was intented to use in the project. (Check Img 1.2)
- SpringInitalizer to create a springboot project.
- Created MySQL Datebase
- Updare Application proerties with the datebase credentials
- Controller package & classes ( Controlles the flow of the application )
- Exception package & class ( Resource not found )
- Model package & Classes ( Data carrying on the application ) 
- Repostitory Package & classes ( Connection between Database and Springboot application )
- Test With Postman

- Create Angular Project (front-end)

- Admin Food Item (Display food Items)
   -   Food Item Class
   -   FoodItem Component 
   -   Food item Service - RESTApi calls to Backend
   -   Add View,Delete,Update buttons
   -   Search Funtionality based on food name.
- Create Food Item (Create food Items)
   -   create-FoodItem Component 
   -   Create form for user to input information to create new food item
   -   Food item Service - Create RESTApi calls to Backend
- Update Food Item (update food Item)
   -   update-FoodItem Component 
   -   Create form for updating food item
   -   Food item Service - Update RESTApi calls to Backend
- Delete Food Item (delete food Item)
   -   Food item Service - delete RESTApi calls to Backend

### Sprint 2 (week 3 - 4)
- Customer Food Item (Display food Items)
   -   Customer-FoodItem Component 
   -   Search Funtionality based on food group 
   -   Cards to display food items
   
- Cart (Add,Remove, display Item in Cart)
   -   Cart-detials component 
   -   cart-item class
   -   Cart Service 
   -   Nav bar display items added
   -   Add/subtract functionality 
   -   "Shopping Cart is empty" when empty
   -   Tables to display cart details i.e Item, Price, Quantity

### Sprint 3 (week 5 - 6)
- Checkout (User input - User info, shipping, billing, Card & Purchase functionality)

   -   Chheckout API 
   -   Checkout component 
   -   Checkout Service
   -   Year and Month are Dynamic
   -   Validators on all input boxes
   -   Unique number generated to user 
   -   
- Login ( Admin login using Okta)

   -   Create okta account
   -   Create my-app-config (store okta account info)
   -   login component (Display Okta sign-in widget)
   -   login-status component (
   -   OktaGuard on components (No access when admin is not logged in)
   -   Nav bar display is dynamic based on Authencation or !Authencation 

  


### Sprint 4 (week 7 - 8)

- Testing (Cypress e2e testing)

   -   install cypress
   -   Create e2e testing cases : 
   -   Testing: Restricted paths redirect
   -   Testing: Login & Logout Success
   -   Testing: View Food Item Success & Return Success
   -   Testing: Update Food Item Success & Return Success
   -   Testing: Add Food Item Success 
   -   Testing: Delete Food Item Success
   -   Testing: Add Item to Cart & Open Cart
   -   Testing: Increment & Remove Items
   -   Testing: Customer Information
   -   Testing: Shipping Address
   -   Testing: Shipping & Billing Addresss Are The Same
   -   Testing: Billing Address
   -   Testing: Billing Information
   -   Testing: Purchase Success
   -   Run : npm run e2e

AWS Deployment 
   
 


IMG 1.2 Click on images to see more clearly. 
![Virtual-Key 1-Diagram](https://user-images.githubusercontent.com/62908390/101273139-b0011a00-3747-11eb-8c37-4a01cdf4f847.png)


   

IMG 1.3 Click on images to see more clearly. 
![Phase1-FullStackWebDev_FinshedAgileFlow](https://user-images.githubusercontent.com/62908390/101273115-8d6f0100-3747-11eb-887b-e69143d78c8d.JPG)



