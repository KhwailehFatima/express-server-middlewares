'use strict'

module.exports = (err, req, res, next) => {
    if (err) {
        res.status(500).send({
            code: 500,
            message: `Server Error: ${err.message || err}`
        })
    }
}