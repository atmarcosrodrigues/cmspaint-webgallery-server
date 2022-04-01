import { Request, Response } from "express";
import { AuthenticateUserService } from "./AuthenticateUserService";

/**
 * Authenticate User Resource
 * -Controller: Receive the data and requests from the routes and passes it on to the service
 * 
*/
class AuthenticateUserController {

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password
        });

        return response.json(token);
    }

}

export { AuthenticateUserController };