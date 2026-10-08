/**
 * Purpose: remove all text files from the Logs directory,
 *  output their names and delte directory 
 */

let fs = require("fs")
let path = require("path")

let logsDirectory = path.join(__dirname, "Logs")

fs.readdir(logsDirectory, (error, files) => {
    if (!error) {
        files.filter((currentElement) => {
            return currentElement.endsWith(".txt")
        }).forEach((file) => {
            console.log("delete files..." + file)
            fs.unlinkSync(path.join(logsDirectory, file))
        })

        fs.rmdir(logsDirectory, () => {
            console.log("Logs directory removed.")
        })
    } else {
        console.log("Logs directory does not exist.")
    }
})