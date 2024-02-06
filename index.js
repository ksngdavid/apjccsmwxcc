// apjccsmwxcc API web URL

const express = require('express');
const app = express();                           //assigning our express app a constant name "app"
const exphbs = require('express-handlebars');
const path = require('path');
const requestToken = require('request').defaults({
    headers: {
        "x-token-passphrase": "anzcsm",
    }
});

const PORT = process.env.PORT || 4000;          // either use the host allocated port OR 4000. This Express function save the tedious path cli needed in regular Node

//Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const otherstuff = "Reach out to CSMs for more details!";

//Set home Handlebar routes
app.get('/', (req, res) => {
        res.render('home', {
            stuff: "More capabilities can be added...",               // to pass variable from backend to frontend (html)
            morestuff: otherstuff
        });            
});

//Set emergency Handlebar routes
app.get('/emergency.html', (req, res) => {
    //Create get_wxcctoken function to get WxCC API Token from Google
    function get_wxcctoken(receivedToken) {
        requestToken('https://australia-southeast1-ringed-valor-334509.cloudfunctions.net/token-service?name=sample', {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            if (res.statusCode === 200){
            //console.log(body);   // Removed console the response body to Terminal
           receivedToken(body) // Returning body value for frontend display
            };
        });    
    };
    
    get_wxcctoken(function(gotToken) {
        
        // Get Emergency default value from WxCC
        const requestEmergency = require('request').defaults({
            headers: {
            "Authorization": "Bearer " + gotToken.token,
            }
        });
    
        //Create get_emergency function to get Emergency default value via WxCC API
        function get_emergency(receivedEmergency) {
            requestEmergency('https://api.wxcc-anz1.cisco.com/organization/2bf92e7b-4add-4c5b-9a37-03438c655e17/cad-variable/2a53d3d0-0168-4ebe-8e34-ceb1633296fd', {json: true}, (err, res, body) => {
                if (err) {return console.log(err);}
                if (res.statusCode === 200){
                //console.log(body.defaultValue);   // Removed console the response body to Terminal
                receivedEmergency(body); // Returning body value for frontend display
                };
            });
        };

        get_emergency(function(gotEmergency) {
            console.log(gotEmergency.defaultValue);
            if (gotEmergency.defaultValue === '0') {
                res.render('emergency0', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotEmergency.defaultValue === '1') {
                res.render('emergency1', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotEmergency.defaultValue === '') {
                res.render('emergencyError', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
        });

    console.log(gotToken.token);



    });
});

//Set distiescalate Handlebar routes
app.get('/distiescalate.html', (req, res) => {
    //Create get_wxcctoken function to get WxCC API Token from Google
    function get_wxcctoken(receivedToken) {
        requestToken('https://australia-southeast1-ringed-valor-334509.cloudfunctions.net/token-service?name=sample', {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            if (res.statusCode === 200){
            //console.log(body);   // Removed console the response body to Terminal
           receivedToken(body) // Returning body value for frontend display
            };
        });    
    };
    
    get_wxcctoken(function(gotToken) {
        
        // Get Emergency default value from WxCC
        const requestToggle = require('request').defaults({
            headers: {
            "Authorization": "Bearer " + gotToken.token,
            }
        });
    
        //Create get_emergency function to get Emergency default value via WxCC API
        function get_toggle(receivedToggle) {
            requestToggle('https://api.wxcc-anz1.cisco.com/organization/2bf92e7b-4add-4c5b-9a37-03438c655e17/cad-variable/3d73fee2-7474-46ce-b858-a776d3b199ce', {json: true}, (err, res, body) => {
                if (err) {return console.log(err);}
                if (res.statusCode === 200){
                //console.log(body.defaultValue);   // Removed console the response body to Terminal
                receivedToggle(body); // Returning body value for frontend display
                };
            });
        };

        get_toggle(function(gotToggle) {
            console.log(gotToggle.defaultValue);
            if (gotToggle.defaultValue === 'false') {
                res.render('distiescalateFalse', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotToggle.defaultValue === 'true') {
                res.render('distiescalateTrue', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotToggle.defaultValue === '') {
                res.render('distiescalateError', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
        });

    console.log(gotToken.token);



    });
});

//Set emergency Handlebar routes
app.get('/activate.html', (req, res) => {
    const activateEmergency = require('request').defaults({
        headers: {
        "Content-Type": "application/json",
        },
        body: {
        "Text":"Hello World",
        }
    });
    activateEmergency.post('https://hooks.au.webexconnect.io/events/XH8CJ8EOJE', {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
    });

    //Create get_wxcctoken function to get WxCC API Token from Google    
    function get_wxcctoken(receivedToken) {
        requestToken('https://australia-southeast1-ringed-valor-334509.cloudfunctions.net/token-service?name=sample', {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            if (res.statusCode === 200){
            //console.log(body);   // Removed console the response body to Terminal
           receivedToken(body) // Returning body value for frontend display
            };
        });    
    };
    
    get_wxcctoken(function(gotToken) {
        
        // Get Emergency default value from WxCC
        const requestEmergency = require('request').defaults({
            headers: {
            "Authorization": "Bearer " + gotToken.token,
            }
        });
    
        //Create get_emergency function to get Emergency default value via WxCC API
        function get_emergency(receivedEmergency) {
            requestEmergency('https://api.wxcc-anz1.cisco.com/organization/2bf92e7b-4add-4c5b-9a37-03438c655e17/cad-variable/2a53d3d0-0168-4ebe-8e34-ceb1633296fd', {json: true}, (err, res, body) => {
                if (err) {return console.log(err);}
                if (res.statusCode === 200){
                //console.log(body.defaultValue);   // Removed console the response body to Terminal
                receivedEmergency(body); // Returning body value for frontend display
                };
            });
        };

        get_emergency(function(gotEmergency) {
            console.log(gotEmergency.defaultValue);
            if (gotEmergency.defaultValue === '0') {
                res.render('emergency0refresh', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotEmergency.defaultValue === '1') {
                res.render('emergency1', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotEmergency.defaultValue === '') {
                res.render('emergencyError', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
        });

    console.log(gotToken.token);



    });
});

//Set emergency Handlebar routes
app.get('/deactivate.html', (req, res) => {
    const deactivateEmergency = require('request').defaults({
        headers: {
        "Content-Type": "application/json",
        },
        body: {
        "Text":"Hello World",
        }
    });
    deactivateEmergency.post('https://hooks.au.webexconnect.io/events/LUJZ51LML6', {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
    });

    //Create get_wxcctoken function to get WxCC API Token from Google    
    function get_wxcctoken(receivedToken) {
        requestToken('https://australia-southeast1-ringed-valor-334509.cloudfunctions.net/token-service?name=sample', {json: true}, (err, res, body) => {
            if (err) {return console.log(err);}
            if (res.statusCode === 200){
            //console.log(body);   // Removed console the response body to Terminal
           receivedToken(body) // Returning body value for frontend display
            };
        });    
    };
    
    get_wxcctoken(function(gotToken) {
        
        // Get Emergency default value from WxCC
        const requestEmergency = require('request').defaults({
            headers: {
            "Authorization": "Bearer " + gotToken.token,
            }
        });
    
        //Create get_emergency function to get Emergency default value via WxCC API
        function get_emergency(receivedEmergency) {
            requestEmergency('https://api.wxcc-anz1.cisco.com/organization/2bf92e7b-4add-4c5b-9a37-03438c655e17/cad-variable/2a53d3d0-0168-4ebe-8e34-ceb1633296fd', {json: true}, (err, res, body) => {
                if (err) {return console.log(err);}
                if (res.statusCode === 200){
                //console.log(body.defaultValue);   // Removed console the response body to Terminal
                receivedEmergency(body); // Returning body value for frontend display
                };
            });
        };

        get_emergency(function(gotEmergency) {
            console.log(gotEmergency.defaultValue);
            if (gotEmergency.defaultValue === '0') {
                res.render('emergency0', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotEmergency.defaultValue === '1') {
                res.render('emergency1refresh', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
            if (gotEmergency.defaultValue === '') {
                res.render('emergencyError', {
                    stuff: "This is stuff...",               // to pass variable from backend to frontend (html)
                    gcfToken: gotToken,
                    emergencyGV: gotEmergency
                });
            };
        });

    console.log(gotToken.token);



    });
});


//Set static folder
app.use(express.static(path.join(__dirname, 'public'))); // Tell app where is the folder of the html file



app.listen(PORT, () => console.log('Server Listening on port ' + PORT));   // Calling our app to listen to a certain port