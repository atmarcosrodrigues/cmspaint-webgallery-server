class InvalidIdError extends Error {
    type: string;
    
    constructor(message: string) {
      super(message);
      this.name = "InvalidIdError";
      this.type = "Invalid uuid";
    }
}

export { InvalidIdError }