Npm init is the command to start the backend.

some core modules are
1.http
2.path
3.fs
4.os
5.event etc...

Index.js is the basic structure to start a server and 
/ -> means root path it can find the paths in the running server 

if we type /users from the index.js file it will goes to the server and inside the module
in this we use req,res means request and response

from front end to backend it is request and from backend ti front end it is response

HTTP responses
200 -> OK(success) {GET,PUT,DELETE}
201 -> created used in (POST)
203 -> No text(PUT,DELETE)
400 -> Bad request (POST)
401 -> Unauthorized
404 -> Not found
409 -> Conflict
500 -> Internal server error
502 -> Bad Gateway
503 -> Service unavailable