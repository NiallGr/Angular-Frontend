# Dinner to Door - Full Stack Application

Food Store Application with Display, Search, Cart, Purchase Functionality. Admin secure access with CRUD functionality on food items. 

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

<!-- **Requirments: Java 1.8** -->
Backend - https://github.com/NiallGr/springboot-backend
Frontend - https://github.com/NiallGr/Angular-Frontend


## Prebuild  
Created a workflow using the Scrum methodology: This workflow was spread out of 4 sprints, with a duration of 2 weeks in each sprint. (8 weeks total dev cycle)
This is captured in "img: 1.1"

"img: 1.1" Click on images to see more clearly. 
![DinnerToDoorLarger](https://user-images.githubusercontent.com/62908390/121791833-1194bc00-cba3-11eb-9457-004b1d0cceb5.JPG)

 "img: 1.2" Click on images to see more clearly. 
![DinnerToDoor(Edited)](https://user-images.githubusercontent.com/62908390/121791903-be6f3900-cba3-11eb-9a66-c6f9c4167300.jpg)
## Build
### Sprint 1 (week 1 - 2)
- Created a visual diagram outlining the design and functionality that was intended to use in the project. (Check Img 1.2)
- SpringInitalizer to create a spring-boot project.
- Created MySQL Datebase (img: 1.3)
- Update Application properties with the database credentials
- Controller package & classes ( Controllers the flow of the application )
- Exception package & class ( Resource not found )
- Model package & Classes ( Data carrying on the application ) 
- Repository Package & classes ( Connection between Database and Springboot application )
- Test With Postman

"img: 1.3" Click on images to see more clearly. 
![MySQL_Diagram](https://user-images.githubusercontent.com/62908390/121791680-633c4700-cba1-11eb-82ad-db4666c3600b.JPG)
- Create Angular Project (front-end)

- Admin Food Item (Display food Items. img:1.4) 
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
 
   "img: 1.4" Click on images to see more clearly. 
![Admin](https://user-images.githubusercontent.com/62908390/121792054-5de0fb80-cba5-11eb-8c3a-96a7601a3d98.JPG)
### Sprint 2 (week 3 - 4)
- Customer Food Item (Display food Items)
   -   Customer-FoodItem Component 
   -   Search Funtionality based on food group 
   -   Cards to display food items
   
- Cart (Add,Remove, display Item in Cart  Img: 1.5)
   -   Cart-detials component 
   -   cart-item class
   -   Cart Service 
   -   Nav bar display items added
   -   Add/subtract functionality 
   -   "Shopping Cart is empty" when empty
   -   Tables to display cart details i.e Item, Price, Quantity
 
  "img: 1.5" Click on images to see more clearly. 
![Cart](https://user-images.githubusercontent.com/62908390/121792022-f6c34700-cba4-11eb-9d4c-e608bb1305f5.JPG)
### Sprint 3 (week 5 - 6)
- Checkout (User input - User info, shipping, billing, Card & Purchase functionality) (img: 1.6)

   -   Checkout API 
   -   Checkout component 
   -   Checkout Service
   -   Year and Month are Dynamic
   -   Validators on all input boxes
   -   Unique number generated to user 
   
- Login ( Admin login using Okta)

   -   Create okta account
   -   Create my-app-config (store okta account info)
   -   login component (Display Okta sign-in widget)
   -   login-status component (
   -   OktaGuard on components (No access when admin is not logged in)
   -   Nav bar display is dynamic based on Authencation or !Authencation 
   -   **Login - Dinner2Dine123@gmail.com**
   -   **Password - Dinner2Dine**

    "img: 1.6" Click on images to see more clearly. 
![Checkout](https://user-images.githubusercontent.com/62908390/121792853-c2548880-cbae-11eb-8757-e4d21aa2a0a4.JPG)

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
   -   Run : npm run e2e (video 1.1)
    
"Video 1.1" - Fullscreen to see more clearly. 

https://user-images.githubusercontent.com/62908390/121791687-6afbeb80-cba1-11eb-8bed-64541a899d6e.mp4

AWS Deployment 
   
 



