import { InvalidIdError } from "../../../exceptions/InvalidIdException";
import { InvalidNameError } from "../../../exceptions/InvalidNameException";
import { CreateImageService } from "./CreateImagesService";
import * as dataTestImages from "../../../tests/data/images";

describe("Create image", () => {

    let createImageService: CreateImageService;

    beforeAll(() => {
        createImageService = new CreateImageService();
    })


    const dataImages = dataTestImages.invalid_title;       
    dataImages.forEach(function (image) {
    
        test('The creation of a image fails with invalid name', async () => {                    
            const { title, data, user_author_id, category_id} = image;
            await expect(createImageService.execute( {title, data, user_author_id, category_id})).rejects.toBeInstanceOf(InvalidNameError);
        });


    }); 


    const dataImagesInvalidId = dataTestImages.invalid_uuid;       
    dataImagesInvalidId.forEach(function (image) {
    
        test('The creation of a image fails with invalid email', async () => {                    
            const { title, data, user_author_id, category_id} = image;
            await expect(createImageService.execute( {title, data, user_author_id, category_id})).rejects.toBeInstanceOf(InvalidIdError);
        });


    }); 
})

