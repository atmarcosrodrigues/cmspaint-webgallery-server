import { getCustomRepository } from "typeorm"
import { ImagesRepositories } from "../../../repositories/ImagesRepositories"

/**
 * List Images By Category Resource
 * -Service: Load ImagesRepository and filter all images from a specific category id
 * 
*/
class ListImagesByCategoryService {
    async execute (category_id: string, skip?: number, take?: number) {

        const imagesRepositories = getCustomRepository(ImagesRepositories);
        const images = await imagesRepositories
            .createQueryBuilder("images")
            .where("images.category_id = :id", { id: category_id })
            .skip(skip)
            .take(take)
            .getMany(); 

        return images;
    }
}

export { ListImagesByCategoryService }