import { Request, Response, NextFunction } from "express";
import { ListImagesByUsersService } from "./ListImagesByUsersService";

/**
 * List Images By User User Resource
 * -Controller: Receive the data and requests from the routes api and passes it on to the service
 * 
*/
class ListImagesByUsersController {
    async handle(request: Request, response: Response, next: NextFunction) {

        if (!response.locals.user_id){
            return response.status(401).end();
        }

        const user_id = response.locals.user_id;
        const listImagesByUsersService = new ListImagesByUsersService();
        const images = await listImagesByUsersService.execute(user_id);      

        return response.json(images);
    }
}

export { ListImagesByUsersController }