// apjccsmwxcc API web URL

const express = require('express');
const app = express();                           //assigning our express app a constant name "app"
var exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 4000;          // either use the host allocated port OR 4000. This Express function save the tedious path cli needed in regular Node

//Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is other stuff!";

//Set Handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
        morestuff: otherstuff
    });
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public'))); // Tell app where is the folder of the html file



app.listen(PORT, () => console.log('Server Listening on port ' + PORT));   // Calling our app to listen to a certain port