Description:
	   This application is used to get the twitter details on a particular #HASHTAG and make it as Graphical representation.
It returns the details like Most retweeted tweet and most favorite tweet and the number of tweets per state in India.



To deploy:
 1.	Clone this application into your PC.
 2. 	Run "npm i" in the directory.
 3.	Install json local server "npm install -g json-server".
 4. 	Run "json-server --watch db.json" to run the local json server.
 5.     Make sure the local json server in the line number search.js:39.
 6. 	Keep the server running.
 7. 	Install  "npm install node-fetch --save".
 8.	And run "node search.js". 