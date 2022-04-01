import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

/**  import routes */
import { router } from "./routes";

/** import library to load .env file*/
import "dotenv/config";


const app = express();

/** Middleware json */
app.use(express.json());

/** Middleware rotes */
app.use(router); 

/** Middleware error handler*/
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

export { app }