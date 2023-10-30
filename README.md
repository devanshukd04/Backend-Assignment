# NodeJS Assignment

# Base URL

 > For Localhost: http://localhost:5000/api/book
 
 > For Deployed Link: https://backend-assignment-zeta.vercel.app/api/book


 # API EndPoints

 > /addBook - This api creates book with the given title, author and summary. It is a post request

 > /getBooks - This api returns all the available books. It is a get Request

 > /getBook/:id - This api return the book with the given id. It is a get request and id is passed as req.params. If the book doesn't exist it return book doesn't exist message

 > /updateBook/:id - This api return the updated with the given id. It is a patch request and id is passed as req.params and the properties to be updated are send in the body. If the book doesn't exist it return book doesn't exist message

 > /deleteBook?:id - This api delete the book with the given id. If the book doesn't exist it return book didn't found message.

 # Steps to run locally

 > Pull the project from github

 > Run the following commands

 >> **npm i**
> >
 >> **nodemon index.js**


 # Deployment

 > Backend is deployed on vercel.

