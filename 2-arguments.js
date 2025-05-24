
const args = process.argv.slice(2); // Extract user arguments

if (args.length === 0) {
    console.log("No argument");
} else if (args.length === 1) {
    console.log(args[0]); // Print the argument itself (e.g., "HBTN")
} else {
    console.log("Arguments found");
}