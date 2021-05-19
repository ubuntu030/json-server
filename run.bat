@ECHO OFF 
start json-server db.json --routes routes.json --middlewares middleware.js
PAUSE