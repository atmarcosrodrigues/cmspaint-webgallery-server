import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

/**
 * Create User Resource
 * -Controller: Receive the data and requests from the routes and passes it on to the service
 * 
*/
class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, bio_desc, email, password, admin } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute( {name, bio_desc, email, password, admin});

        return response.json(user);       
    }

}

export { CreateUserController };