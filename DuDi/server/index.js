//console.log("Sending a messagge from nodejs");
/* setting that belongs expressJs */
const express = require('express');
/* getting and setting the env variables */
require('dotenv').config();
/* getting the connection from db.js */


/* creating a server calling the express constant as a function */
const app = express();
/* calling the function to create the database */
/* the server app obtains a server defining the path or url int the first parameter and then creating a callback */
//app.get('/',(request, response) => {
    /* send function sends the response to navigator */
    /* response.send({
        ok: true,
        msg: 'entering to server'
    }) */
    
    /* status function is useful to send the response direct to postman an not to navigator */
    /* response.status(404).json({
        ok: false,
        msg: 'entering to server'
    })
}) */

/* to read json documents */
app.use( express.json() )
/* obtaining the routes */
app.use('/api', require('./database/db'));
/* listenning the server putting the number of the port and a callback type function */
app.listen(process.env.PORT, () => {//<--using enviroment variable
    /* the callback function sends a messagge confirming it was possible conecting to port 5000 */
    console.log(`Conected to port ${process.env.PORT}`);
})