#  Udacity Full Stack javascript developer - Store front end

This is the third project of the Udacity Full Stack Javascript Developer Nanodegree program: MyStore.

It is a simple e-commerce store front end, developed with Angular CLI version 12.2.9. 

The starting point for this project is the repository available at: https://github.com/udacity/nd-0067-c3-angular-fundamentals-project-starter
-cli).

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

