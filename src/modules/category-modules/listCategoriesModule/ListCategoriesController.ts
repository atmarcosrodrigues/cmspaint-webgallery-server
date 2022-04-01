import { Request, Response, NextFunction } from "express";
import { ListCategoriesService } from "./ListCategoriesService";

/**
 * List Categories Resource
 * -Controller: Call the list categories service
 * 
*/
class ListCategoriesController {

    async handle(request: Request, response: Response, next: NextFunction){
        const listCategoriesService = new ListCategoriesService();

        const categories = await listCategoriesService.execute();

        return response.json(categories);
    }

}

export { ListCategoriesController }