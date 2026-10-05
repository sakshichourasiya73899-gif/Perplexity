class ApiError extends Error{
    constructor(message,statuscode){
        super(message)
        thiis.statuscode = statuscode;
    }
}

export {ApiError}