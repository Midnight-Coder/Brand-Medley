Brand-Medley
============

Kraken.js project to get tweet counts of brands

Steps for installation : 

Clone the repo : 
'git clone git@github.com:Midnight-Coder/Brand-Medley.git'

Get the npm packages : mtwitter and reload,supervise (to auto reload the server on file changes)

'npm install mtwitter'

'npm install reload'

-----------------------
 
Start the server with : 
'npm start' (or  'supervisor -e 'html|js' node index.js' to be able to make live changes to code) 

Use the app by pointing your browser to : 'localhost:8000' (supervisor was behaving buggy for me, sometimes I would have to reload the page 2-3 times before I hit it).
