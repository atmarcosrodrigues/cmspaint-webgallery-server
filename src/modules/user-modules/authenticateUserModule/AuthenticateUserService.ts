import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../../repositories/UsersRepositories";
const AUTHENTICATION_KEY = process.env.AUTHENTICATION_KEY || "";

interface AuthenticateUserRequest {
    email: string;
    password: string;
}

/**
 *  Authenticate User Resource
 * -Service: Receive user email/passord and check if match with hash password stored on datababase
 *           if is valid combination return a valid tokne
 *           else return a error message informing invalid email/password
 * 
*/
class AuthenticateUserService {

    async execute({email, password}: AuthenticateUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        const user = await usersRepositories.findOne({
            email
        });

        // Verifify if email existis
        if (!user){
            throw new Error("Email/Passwoerd Incorrect");
        }
        // Verify if password is correct
        const passwordMatch = await compare(password, user.password);
        
        if (!passwordMatch) {
            throw new Error("Email/Passwoerd Incorrect");
        }
        
        // Generate token
        const token = sign(
            {
                email: user.email
            },
            AUTHENTICATION_KEY,
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return token;
    }
}

export { AuthenticateUserService };