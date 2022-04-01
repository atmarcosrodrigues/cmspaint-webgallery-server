
<h1 align="center">
   MS Paint Web Gallery
</h1>


<p align="center">
  Paint Web Gallery Server
  <br>
  <img src="https://img.shields.io/static/v1?label=Dev&message=AlphaTech&color=8257E5&labelColor=000000" alt="Alphatech" />
</p>

[MS Paint Classic][ms-paint-classic] is a mobile application for drawing and art design creation. The app has a simple and intuitive design, but complete with classic functions lacking in other painting apps. Perfect for kids of all ages and the whole family to have fun.

The application has an online image sharing and storage system. This repository provides The WebGallery Server, a web plataform for storing these data through an rest api.




## Technologies 

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## Installation / Usage

* Git clone this repository
* Create a .env file with following content:

   ```
		TYPEORM_CONNECTION = "postgres"
		TYPEORM_HOST = "YOUR_SERVER"
		TYPEORM_USERNAME = "YOUR_USER_POSTGRES"
		TYPEORM_PASSWORD = "YOUR_USER_POSTGRES_PASSWORD"
		TYPEORM_PASSWORD_TEST = "YOUR_USER_POSTGRES_PASSWORD_TESTS"
		TYPEORM_DATABASE = "YOUR_DATABASE"
		TYPEORM_DATABASE_TESTS = "YOU_DATABASE_TESTS"
		TYPEORM_PORT = 5432 #OR YOUR DATABASE PORT
		TYPEORM_MIGRATIONS = "src/database/migrations/*.ts"
		TYPEORM_MIGRATIONS_DIR = "src/database/migrations"
		TYPEORM_ENTITIES = "src/entities/*ts"
		TYPEORM_ENTITIES_DIR = "src/entities"

		SERVER_PORT = "3000" # OR YOUR SERVER PORT
		AUTHENTICATION_KEY = "YOUR_SECRET_AUTHENTICATION_KEY"
   ```

* Install dependencies:



   ```
	yarn add typescript -D
	yarn tsc --init
		
    yarn add express   
    yarn add @types/express -D

    yarn add ts-node-dev -D
    yarn add dotenv

    yarn add uuid

    yarn add @types/uuid -D
	
    ## library to handle with async errors
    yarn add express-async-errors

    ## Library to generate signed tokens
    yarn add jsonwebtoken
    yarn add @types/jsonwebtoken -D
    
    ## Library to encrypt password
    yarn add bcryptjs
    yarn add @types/bcryptjs -D

    # Installing ORM (Type ORM) and DB
    yarn add typeorm
    yarn add reflect-metadata    
    

    # Create migrations for tables in database
    # yarn typeorm migration:create -n (MigrationName)
    # Run migrations
    yarn typeorm migration:run

    # Revert latest migration
    yarn typeorm migration:revert
        
    # Use cors to enable external/others clients to access the server api
    yarn add cors
    yarn add @types/cors
    
    # Library for tests
    yarn add jest @types/jest ts-jest -D
    yarn jest --init    
    yarn add supertest @types/supertest -D
    ```




* ### Running the Server

    On your terminal, run the server using this one simple command:

    ```bash
    $ yarn dev
    ```

    You can now access the app on your local browser by using

    ```bash
    http://localhost:3000
    ```
* ### Running Tests

    On your terminal run:

    ```bash
    $ yarn test
    ```


[ms-paint-classic]: http://http://alpha-technology.appspot.com/mspaintclassic "MS Paint Classic"
