const cron = require("node-cron")
const shell = require("shelljs")
const moment = require("moment")
cron.schedule("*/3 * * * * * ", () => {
    console.log("NodeJS script is running", moment().format("DD MMM YYYY hh:mm:ss"))
})

cron.schedule("* * * * * *", () => {
    console.log("Run the task every second", moment().format("DD MMM YYYY hh:mm:ss"))
})

cron.schedule("2-6 * * * * *", () => {
    console.log("I will work on this time only", moment().format("DD MMM YYYY hh:mm:ss"))
})

cron.schedule("0 0 10 * Feb *", () => {   //0 0 10 * FEb * means at  10 am 0second 0 minute everyday for the month of feb every week
    console.log("Our StandUp is scheduled for 10:30 AM everyday", moment().format("DD MMM YYY hh:mm:ss"))
})