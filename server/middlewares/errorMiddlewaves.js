const routeNotFound =(req, res, next) => {

    const error = new Error (`Route not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
    
    
    };
    
    const errorHandler = (err, req, res, next) => {
        let statuscode = res.statuscode === 200 ? 500 : res.statuscode;
        let message = err.message;
    
    if (err.name  === "CastError"  && err.kind === "ObjectId"){
    
        statuscode = 404;
        message = "Resource not found";
    }
    
    res.status(statuscode).json({
        message: message,
        stack: process.env.NODE_ENV !== "production" ? null : err.stack,
    });
    
    
    
    };
    
    export { routeNotFound, errorHandler};
    
    