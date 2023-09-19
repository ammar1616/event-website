const sequelize = require("sequelize")

const objsequelize = new sequelize("usam_task1", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = objsequelize