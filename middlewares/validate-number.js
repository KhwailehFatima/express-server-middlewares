'use strict';

module.exports = (req, res, next) => {
    const num = parseInt(req.query.num);
    if ( !isNaN(num)) {
        req.squareNumber = num * num;
        next();
    } else {
        console.log(typeof num)
        next('Invalid Number');
    }
}