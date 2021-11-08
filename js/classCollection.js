
// Custom Error
// Inheritance from parent Class Error
class EmptyInput extends Error {
    constructor(message) {
        super(message);
    }
}

export {EmptyInput};