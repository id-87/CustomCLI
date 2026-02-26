var Command = require('commander').Command;
var program = new Command();
program
    .command("greet <name>")
    .action(function (name) {
    console.log("Hello ".concat(name));
});
program.parse();
