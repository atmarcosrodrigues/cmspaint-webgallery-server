class ValidationError extends Error {
    type: string;
    
    constructor(message: string, type: string) {
      super(message);
      this.name = "ValidationError";
      this.type = type;
    }
}

export { ValidationError }