const [ , , ...args] = process.argv;

switch (true){
    case args[0] === undefined:
        console.log("No argument");
        break;
    default:
        console.log("Argument found");
}