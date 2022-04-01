//import e from "express";

import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../../repositories/UsersRepositories";
import { hash } from "bcryptjs";
import { InvalidEmailError } from "../../../exceptions/InvalidEmailExceptions";
import { InvalidNameError } from "../../../exceptions/InvalidNameException";

interface UserModdel {
    name: string;
    bio_desc: string;
    email: string;
    password: string;
    admin?: boolean;
}

/**
 * Create User Resource
 * -Service: Receive data from controller and call the UserRepository to store the data on database
 * 
*/
class CreateUserService {

    async execute( {name, bio_desc, email, password, admin}: UserModdel){        
        const validateEmail = (email: string) => {  
            const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
            return emailRegexp.test(email);
        }

        var regExp = /[a-zA-Z]/g;
        if (!name || name === "" || name.replace(" ", "") === "" || !regExp.test(name)) {
            throw new InvalidNameError("Name Incorrect");
        }

        if (!email || !validateEmail(email)) {            
            throw new InvalidEmailError("Email Incorrect");
        }
                
        const usersRepository = getCustomRepository(UsersRepositories);
        const userAlreadyExists =  await usersRepository.findOne({
            email
        });

        if (userAlreadyExists){
            throw new Error("User Already Exists");
        }

        const passwordHash = await hash(password, 8);
        const user = usersRepository.create({
            name,
            bio_desc,
            email,
            password: passwordHash,
            admin
        });
        await usersRepository.save(user);

        return user;
    }

}

export { CreateUserService };