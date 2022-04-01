import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


/**
 *  Middlewate ensureAuthentication: Check if a user is authenticated with a valid token
 * 
*/
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    
    // Load authentication secret key from .env ambience file
    const AUTHENTICATION_KEY = process.env.AUTHENTICATION_KEY || "";
   
    // Receive the token
    const authToken = request.headers.authorization;
    
    if (!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ");

    try {
        const decode = verify(token, AUTHENTICATION_KEY);
        const user_id = decode.sub;
        console.log("auth middleware --", user_id);
        
        response.locals.user_id = user_id;

        return next();
    } catch (err) {
        return response.status(401).end();        
    }

 
    // Validate if is token 

    // Validate token is valid

}