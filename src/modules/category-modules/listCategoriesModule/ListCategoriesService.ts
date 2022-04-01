import { getCustomRepository } from "typeorm"
import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories"

/**
 * List Categories Resource
 * -Service: Receive request from controller and call the ImageRepository to get the data from database
 * 
*/
class ListCategoriesService {
    async execute(){
        const categoriesRepository = getCustomRepository(CategoriesRepositories);
        const categories = await categoriesRepository.find();

        return categories;
    }
}

export { ListCategoriesService }