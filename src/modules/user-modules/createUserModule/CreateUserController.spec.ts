
import { createConnection, getConnection } from "typeorm";
import { User } from "../../../entities/User";
import { app } from "../../../app";
import request from "supertest";

import * as dataTestUser from "../../../tests/data/users";

import "dotenv/config";

/* Create User Controller: Integration Test Case */

describe("Create user", () => {

    
    beforeAll(() => {
        
        return createConnection({
            type: "postgres",
            host: process.env.TYPEORM_HOST,
            port: 5432,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE_TESTS,
            entities: [User],
            dropSchema: true,
        });

    });

    afterAll(() => {
        let conn = getConnection();
        return conn.close();
    });


    const usersInvalidName = dataTestUser.invalid_name;       
    usersInvalidName.forEach(function (user) {
        
        test('The creation of a user fails with a invalid email', async () => {        
            const response = await request(app)
            .post("/users")
            .send(user)
    
            expect(response.status).toBe(400);
            expect(response.text).toBe('{"error":"Name Incorrect"}');
            
        });        

    }); 
        

    const usersInvalidEmail = dataTestUser.invalid_email;       
    usersInvalidEmail.forEach(function (user) {
        
        test('The creation of a user fails with a invalid email', async () => {        
            const response = await request(app)
            .post("/users")
            .send(user)
    
            expect(response.status).toBe(400);
            expect(response.text).toBe('{"error":"Email Incorrect"}');
            
        });        

    }); 
        

        
}) 