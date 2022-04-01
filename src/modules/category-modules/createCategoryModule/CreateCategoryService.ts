import { getCustomRepository } from "typeorm";
import { InvalidNameError } from "../../../exceptions/InvalidNameException";
import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories";

interface CategoryModdel {
    name: string;
    desc: string;
}


/**
 * Create Category Resource
 * -Service: Receive data from controller and call the CategoryRepository to store the data on database
 * 
*/
class CreateCategoryService {
    async execute( {name,desc}: CategoryModdel){
        var regExp = /[a-zA-Z]/g;
        if (!name || name === "" || name.replace(" ", "") === "" || !regExp.test(name)) {
            throw new InvalidNameError("Name Category Incorrect");
        }

        const categoriesRepository = getCustomRepository(CategoriesRepositories);      
        const catogoryAlreadyExists =  await categoriesRepository.findOne({
            name
        });

        if (catogoryAlreadyExists){
            throw new Error("Category Already Exists");
        }

        const category = categoriesRepository.create({
            name,
            desc
        });

        await categoriesRepository.save(category);
        return category;
    }
}

export { CreateCategoryService };