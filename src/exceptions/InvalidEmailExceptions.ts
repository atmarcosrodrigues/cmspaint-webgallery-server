import { ValidationError } from "./ValidationException";

class InvalidEmailError extends ValidationError {

    constructor(message: string) {
      super(message, "InvalidEmailError");
    }
} 

export { InvalidEmailError }