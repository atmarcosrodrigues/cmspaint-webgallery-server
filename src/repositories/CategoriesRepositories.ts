import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";

/**
 * Repostory of entities Category
 */
@EntityRepository(Category)
class CategoriesRepositories extends Repository<Category> {}

export { CategoriesRepositories }