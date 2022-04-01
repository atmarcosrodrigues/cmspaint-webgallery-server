import { Router, request, response } from "express";

/** Module User */
import { CreateUserController } from "./modules/user-modules/createUserModule/CreateUserController";
import { AuthenticateUserController } from "./modules/user-modules/authenticateUserModule/AuthenticateUserController";

/** Module Category */
import { CreateCategoryController } from "./modules/category-modules/createCategoryModule/CreateCategoryController";
import { ListCategoriesController } from "./modules/category-modules/listCategoriesModule/ListCategoriesController";

/** Module Image */
import { CreateImageController } from "./modules/image-modules/createImageModule/CreateImageController";
import { ListImagesByUsersController } from "./modules/image-modules/listImagesByUsersModule/ListImagesByUserController";
import { ListImagesByCategoryController } from "./modules/image-modules/listImagesByCategoryModule/ListImagesByCategoryController";

/** Middlewares  */
import { ensureAuthenticated } from "./middlewares/ensureAuthencticated";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

/** Create module resources */
const createUserController = new CreateUserController();
const createCategoryController = new CreateCategoryController();
const authenticateUserController = new AuthenticateUserController();
const createImageController = new CreateImageController();
const listImagesByUsersController = new ListImagesByUsersController();
const listImagesByCategoryController = new ListImagesByCategoryController();
const listCategoriesController = new ListCategoriesController();

/** Post method /user | User Creation Resource */
router.post("/users", createUserController.handle);

/** Post method /login | User Login Resource */
router.post("/login", authenticateUserController.handle);


/** Post method /categories | Categories Creation Resource */
router.post("/categories", 
    ensureAuthenticated, // verify user authentication
    ensureAdmin,         // verify user authorization 
    createCategoryController.handle);

/** Get method /categories | Categories List Resource */
router.get("/categories", 
    ensureAuthenticated,
    listCategoriesController.handle);    

/** Post method /images | Create Images Resource */
router.post("/images", 
    ensureAuthenticated,
    createImageController.handle);

/** Get method /images | Images List Resource */
router.get("/images", 
    ensureAuthenticated,
    listImagesByUsersController.handle);

/** Get method /images | Images Get by id Resource */
router.get("/images", 
    ensureAuthenticated,
    listImagesByUsersController.handle);

/** Get method /images/category | Get all Images from Specific Category Resource */
router.get("/images/category/:category_id", 
    ensureAuthenticated,
    listImagesByCategoryController.handle);

export { router };
