import { Request, Response, NextFunction } from "express";
import { ListImagesByCategoryService } from "./ListImagesByCategoryService";

/**
 * List Images By Category Resource
 * -Controller: Receive requests from the routes and passes it on to the service
 * 
*/
class ListImagesByCategoryController {
    async handle(request: Request, response: Response, next: NextFunction) {

        const { category_id } = request.params;
        const { skip = 0, take = 10} = request.query;
        const number_skip = parseInt((skip).toString(), 10);
        const number_take = parseInt((take).toString(), 10);

        if (!response.locals.user_id){
            return response.status(401).end();
        }
        const listImagesByCategoryService = new ListImagesByCategoryService();
        const images = await listImagesByCategoryService.execute(category_id, number_skip, number_take);       

        return response.json(images);
    }
}

export { ListImagesByCategoryController }