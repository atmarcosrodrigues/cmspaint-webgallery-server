import { getCustomRepository } from "typeorm"
import { ImagesRepositories } from "../../../repositories/ImagesRepositories"

/**
 * List Images By User Resource
 * -Service: Load ImagesRepository and filter all images from a specific user id
 * 
*/
class ListImagesByUsersService {
    async execute (user_id: string) {        
        const imagesRepositories = getCustomRepository(ImagesRepositories);
        
        const images = await imagesRepositories.find({
            where: {
                user_author_id: user_id
            },
            relations: ["category"]
        });

        return images;
    }
}

export { ListImagesByUsersService }