


https://user-images.githubusercontent.com/109414918/226109617-bb93c53f-3fcc-42ec-8fd0-621307e94ad7.mp4



# Issue-Tracker

The code is divided into scalable folders
 namely  assets, config, controller, models, routes, views
    
    
     assets folder -> holds the images and styling for different views
            each css file code has been separated byy commented headers specifying the exact section in
            page where the styling has been used.
            
     config folder -> this folder is used to define the mongoose layer and  passport local
            The mongoose layer heps in providing an interface to interact with the Mongo DB database
            The passport file is used to define the authentication and  set some parameters for views


     controller folder -> this folder has manly three files userscontroller,homecontroller,projectcontroller
           usercontroller.js -> has mostly functions with creating a user, creating a session cookie for user
           homecontroller.js -> has functions to create project, and function to view the create project
           projectcontroller.js -> has functions to create issue, filter issue based ion author,label and load the issues
 
    models folder -> this folder has the schema out;ine of the three Db's created (user,project and Issue)
    
    routes folder -> has mainly three files to direct to three sections of the project mainly 
                        -> home page
                        -> Sign up/in page
                        -> Issues page
                        
    views folder -> contains the ejs files of the different pages traversed
