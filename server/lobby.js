/*
Copyright (c) 2021. Daiyong Kim All Rights Reserved.
*/

'use strict';

const Express = require('express');
const Router = Express.Router();

var result = {"data":[{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}]}

Router.get('/getdata', (req, res) => {
    res.send(result);
    res.statusCode = 200;
    console.log(res.statusCode);

})

Router.post('/senddata', function (req, res) {
    //res.send('POST request to the homepage');
    //mock server    
    console.log(req.body)
    res.statusCode = 200;
    console.log(res.statusCode);
});

module.exports = Router;