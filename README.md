# Phone-Book-Angular
Phone Book App made in Angular

Please to test or simply check out the application, navigate to:
https://aliemir99.github.io/Phone-Book-Angular/

For mock database to work you will need to have a local instance of the Json server running.
Node.js needs to be also installed.
To have the json server work first you will need to download the repository,
and then locate to powershell:

If you haven't already first you will need to set the execution policy to give yourself rights to download packages

  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Then you will need to install angular CLI if it isn't installed already
You can do this through the Terminal in VS code

  npm install -g @angular/cli
  
 navigate to application folder and execute 
   code .
 
 which will launch VS Code with the application.

Install Json server

  npm install -g json-server

to run the local instance of the server execute

  npm run server
make sure the execution of this command shows 

  json-server --watch db.json --port 5000

on the second line

once the local instance of the json server is running, you will need to serve the application
to do this execute the following command:

ng serve

if ng serve gives an error:
An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'

run "npm install" to install the package first then do "ng serve"

ng serve will build and compile the application
once it is done note the last line before the "compiled successfully" it shows where to launch the application:
for example for me it was : 
http://localhost:4200/

you can either navigate to your http://localhost:[portnumber]/ to launch the local instance of the application
or 
click on the link provided above to launch the deployed version of the application.
Both should be able to recognize the local server instance you are running.

Note: I have noticed a slight problem with the deploy version where when you first add a new contact, it initially doesn't show it in the list right away untill you refresh the page but afterwards at any point you add a contact you should be able to see it right away.


