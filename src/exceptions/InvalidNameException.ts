import { ValidationError } from "./ValidationException";

class InvalidNameError extends ValidationError {

    constructor(message: string) {
      super(message, "InvalidNameError");
    }
} 

export { InvalidNameError }