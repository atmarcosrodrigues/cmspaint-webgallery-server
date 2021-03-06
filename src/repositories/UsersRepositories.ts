import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

/**
 * Repostory of entities User
 */
@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };