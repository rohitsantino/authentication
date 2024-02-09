const errorHandler = (req, res, next, err) => {
    res.status(res.statusCode).json({
        "message": err.message
    });
};

module.exports = errorHandler;