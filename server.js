'use strict';

const express = require( 'express' );
const app = express();
const cors = require( 'cors' );
const validateNumber = require( './middlewares/validate-number' );
const errorHandler = require( './error-handler/500' );


// Application level middleware
app.use( cors() );
app.use( express.json() );


app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});


app.get( '/square', validateNumber, ( req, res ) => {
    console.log(req.query.num)
    res.status( 200 ).send( `the square of ${req.query.num} is ${req.squareNumber}` );
} );

// Error Handler
app.use( errorHandler );


function start ( port ) {
    app.listen( port, () => console.log( `server up a wake` ) );
}

module.exports = {
    app: app,
    start: start
};