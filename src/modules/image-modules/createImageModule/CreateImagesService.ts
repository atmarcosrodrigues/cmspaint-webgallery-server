import { getCustomRepository } from "typeorm";
import { InvalidIdError } from "../../../exceptions/InvalidIdException";
import { InvalidNameError } from "../../../exceptions/InvalidNameException";
import { CategoriesRepositories } from "../../../repositories/CategoriesRepositories";
import { ImagesRepositories } from "../../../repositories/ImagesRepositories";
import { UsersRepositories } from "../../../repositories/UsersRepositories";

interface ImageModdel {
    title: string;
    data: string;
    user_author_id: string;
    category_id: string;
    
}


/**
 * Create Image Resource
 * -Service: Receive data from controller and call the ImageRepository to store the data on database
 * 
*/
class CreateImageService {

    async execute( {title, data, user_author_id, category_id}: ImageModdel){

        const validateId = (id: string) => {  
            const idRegexp = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
            return idRegexp.test(id);
        }


        var regExp = /[a-zA-Z]/g;
        if (!title || title === "" || title.replace(" ", "") === "" || !regExp.test(title)) {
            throw new InvalidNameError("Title Invalid")
        }
        if (!user_author_id || !validateId(user_author_id) ) {
            throw new InvalidIdError("Invalid User Id");
        }
        if (!category_id || !validateId(category_id) ) {
            throw new InvalidIdError("Invalid Category Id");
        }
                
        const imagesRepository = getCustomRepository(ImagesRepositories);
        const usersRepository = getCustomRepository(UsersRepositories);
        const categoriesRepository = getCustomRepository(CategoriesRepositories);

        const userExists =  await usersRepository.findOne(user_author_id);
        const categoryExists =  await categoriesRepository.findOne(category_id);

 
        if (!userExists){
            throw new Error("Invalid user id");
        }

        if (!categoryExists){
            throw new Error("Invalid category id");
        }

        const image = imagesRepository.create({
            title,
            data, 
            user_author_id,
            category_id
        });

        await imagesRepository.save(image);

        return image;

    }

}

export { CreateImageService };