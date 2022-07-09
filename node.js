const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true
		}
	},
	handler: function (argv) {
		console.log("Adding a new note!", argv);
	}
});

console.log(yargs.argv);

// function createAndAppendDataToFile(initalData, appendData) {
// 	fs.writeFileSync("notes.txt", initalData);
// 	console.log("notes.txt file created and initial data added");
// 	fs.appendFileSync("notes.txt", appendData);
// 	console.log("appendData added");
// }

// createAndAppendDataToFile("Initial data...", "+Appending data...");

// const getNotes = require("./notes");
// const note = getNotes("This my notes");
// console.log(note);

// var validator = require("validator");
// console.log(validator.isEmail("oopskkkll.com"));
