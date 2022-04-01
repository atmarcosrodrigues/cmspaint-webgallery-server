import { InvalidEmailError } from "../../../exceptions/InvalidEmailExceptions";
import { InvalidNameError } from "../../../exceptions/InvalidNameException";
import { CreateUserService } from "./CreateUserService";
import * as dataTestUser from "../../../tests/data/users";

/* Create User Service Test Case */

describe("Create user", () => {
    
    const createUserService = new CreateUserService();

    // Selecet a sample user from test dataset
    // const dataUsers = dataTestUser.valid_users;
    // let user = dataUsers[Math.floor(Math.random() * dataUsers.length)];
   

    // test('The creation of a user fails with a invalid email empty', async () => {
    //     user.email = "";
    //     const { name, bio_desc, email, password} = user;
    //     await expect(createUserService.execute( {name, bio_desc, email, password})).rejects.toBeInstanceOf(InvalidEmailError);
    // });

    
    // test('The creation of a user fails with a invalid name empty', async () => {
    //     user.name = "";
    //     user.email = "user@mail.com"
    //     const { name, bio_desc, email, password} = user;        
    //     await expect(createUserService.execute( {name, bio_desc, email, password})).rejects.toBeInstanceOf(InvalidNameError);
    // });

    const usersInvalidNames = dataTestUser.invalid_name;       
    usersInvalidNames.forEach(function (user) {
     
        test('The creation of a image fails with invalid name', async () => {                    
            const { name, bio_desc, email, password} = user;        
            await expect(createUserService.execute( {name, bio_desc, email, password})).rejects.toBeInstanceOf(InvalidNameError);
        });
    });      

   
    const usersInvalidEmail = dataTestUser.invalid_email;       
    usersInvalidEmail.forEach(function (user) {
     
        test('The creation of a image fails with invalid email', async () => {                    
            const { name, bio_desc, email, password} = user;        
            await expect(createUserService.execute( {name, bio_desc, email, password})).rejects.toBeInstanceOf(InvalidEmailError);
        });
    });      

        
}) 