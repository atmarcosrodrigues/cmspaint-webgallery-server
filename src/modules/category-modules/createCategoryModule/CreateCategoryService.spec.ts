import { InvalidNameError } from "../../../exceptions/InvalidNameException";
import { CreateCategoryService } from "./CreateCategoryService";

import * as dataTestCategories from "../../../tests/data/categories";

describe("Create category", () => {

    const createCategoryService = new CreateCategoryService();

        
    test('The creation of a category fails with name empty', async () => {        
        // Selecet a sample category from test dataset
        const dataCategories = dataTestCategories.invalid_empty_names;
        const category = dataCategories[Math.floor(Math.random() * dataCategories.length)];   
        
        const { name, desc } = category;
        await expect(createCategoryService.execute( {name, desc})).rejects.toBeInstanceOf(InvalidNameError);
    });
    

    test('The creation of a category fails with invalid name', async () => {        
        // Selecet a sample category from test dataset
        const dataCategories = dataTestCategories.invalid_names;
        const category = dataCategories[Math.floor(Math.random() * dataCategories.length)];   
  
        const { name, desc } = category;
        await expect(createCategoryService.execute( {name, desc})).rejects.toBeInstanceOf(InvalidNameError);
    });
    

    const dataCategories = dataTestCategories.invalid_names;       
    dataCategories.forEach(function (category) {
    
        test('The creation of a category fails with invalid name', async () => {                    
            const { name, desc } = category;
            await expect(createCategoryService.execute( {name, desc})).rejects.toBeInstanceOf(InvalidNameError);
        });


    }); 


})