import { Request, Response } from "express";
import { CreateCategoryService } from "./CreateCategoryService";


/**
 * Create Category Resource
 * -Controller: Receive the data and requests from the routes and passes it on to the service
 * 
*/
class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, desc } = request.body;
        const createCarogoryService = new CreateCategoryService();
        const category = await createCarogoryService.execute( {name, desc});

        return response.json(category);
        
    }
}

export { CreateCategoryController };