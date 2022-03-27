let userInput: unknown; // can receive from anyone, can't give to everyone
let userName: string;

userInput = 5;
userInput = "max";
if (typeof userInput === "string") {
  userName = userInput;
}

// explicitly describes that this function will NEVER return anything
// throwing error, infinite loop, etc would be the case
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while(true)
}

generateError("An error occured haha!", 500);
