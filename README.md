#  Udacity Full Stack javascript developer - Store front end

This is the third project of the Udacity Full Stack Javascript Developer Nanodegree program: MyStore.

## Project description

This project is a simple e-commerce store front end application, developed with Angular CLI version 12.2.9. The starting point for this project is the repository available at: https://github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter-cli).

The project demonstrate the uses of the following Angular capabilities:
* Use of Angular Components
* Use of @Input decorator to pass data from parent to child component
* Use of @Output decorator and EventEmitter class to pass data from child to parent component
* Use of Angular Services (to pass data between sibling components)
* Use of one-way and two-ways bindings to connect data between (typescript) components and (HTML) templates
* Use of HttpClient Module to load external data
* Use of AppRouting Module to facilitate navigation between pages and avoid reloading
* Use of directives in HTML (*ngFor, *ngIf,...)

Additionally, CSS is used to style the application and Typescript is used throughout.

## Key features of the application

The application starts with users being presented a list of all products available in the store. The list shows, for each product, its name, price, and a picture. Users have the possibility to add multiple items of any product to a cart, and to obtain more detailed information on a product by clicking on its image.

At any moment, users have the possiblity to access the cart (through a navigation bar on the top of the page). From the cart view, users can see all the products they have added to the cart, as well as the total value in the cart. They can also remove some items and confirm their order. To confirm their order, users have to enter their name, address and credit card number. These fields are tested for minimum length and/or content, and only in case they are not invalid are the users allowed to proceed with their order. At that point, an order confirmation page is displayed, and the cart is emptied. 


# Deployment

In order to run this app you first need to install all required typescript packages using
```
npm install
```
then serve the Angular application to make it accessible to your browser using
```
ng serve
```
and then navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Alternatively, you can ask Angular to serve the application on a port that is not 4200 (i.e., the Angular default) by running
```
ng serve --port 3000
```
This will serve the applicaiton on port 3000.

# Folder structure

The main folders are:
* `src/app` contains all the source files (in Typescript)
  * `src/app/components` contains the different components:
    *  cart, confirmation,nav-bar, product-item, product-item-detail, product-list
  * `src/app/models` contains the models (there is only model: Product)
  * `src/app/services` contains the services
    * product, which serves to load the products from a file using HttpClient
    * cart, which serves to exchange cart content information among components
    * order, which serves to exchange order information
* `src/assets` contains JSON a file with all the products available in the store

