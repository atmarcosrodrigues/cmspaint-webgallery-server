import { Request, Response } from "express";
import { CreateImageService } from "./CreateImagesService";

/**
 * Create Image Resource
 * -Controller: Receive the data and requests from the routes and passes it on to the service
 * 
*/
class CreateImageController {

    async handle(request: Request, response: Response) {
        const { title, data, category_id } = request.body;

        if (!response.locals.user_id){
            return response.status(401).end();
        }
        
        const user_author_id = response.locals.user_id;
        const createImageService = new CreateImageService();

        const image = await createImageService.execute({
            title,
            data,
            user_author_id,
            category_id
        });

        return response.json(image);
    }
}

export { CreateImageController };