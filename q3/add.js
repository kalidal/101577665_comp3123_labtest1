/**
 * Purpose: Create Logs directory,
 *  change process directory, and 
 * create 10 log files using filter
 */

let fs = require("fs")
let path = require("path")

let logsDir = path.join(__dirname, "Logs")

fs.mkdir(logsDir, { recursive: true }, (error) => {
    if (!error) {
        process.chdir(logsDir)

        let logNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        logNumbers.filter((currentElement) => {
            return currentElement >= 0
        }).forEach((i) => {
            let fileName = `log${i}.txt`
            fs.writeFileSync(fileName, "Some text in log file " + i)
            console.log(fileName)
        })
    }
})