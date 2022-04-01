import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
    

/**
 *  Middlewate ensureAdmin: Check if a user has admin privileges and is authorized to specific actions
 * 
*/
export async function ensureAdmin (
    request: Request,
    response: Response,
    next: NextFunction
) {    

    if (!response.locals.user_id){
        return response.status(401).end();
    }
    
    const user_id = response.locals.user_id;
    console.log("admin middleware --", user_id, typeof(user_id));

    const usersRepositories = getCustomRepository(UsersRepositories);
    
    const user  = await usersRepositories.findOne(user_id);
    const admin = user?.admin;
    console.log(admin);

    if (admin) {
        return next();
    }

    return response.status(401).end();
}