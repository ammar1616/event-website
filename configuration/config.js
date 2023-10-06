const sequelize = require("sequelize")

const objsequelize = new sequelize("u266061040_usam_event", "u266061040_usamevent_user", ">8r;qULziX", {
    host: "149.100.151.114",
    dialect: "mysql"
})

// const objsequelize = new sequelize("usam_event", "root", "", {
//     host: "localhost",
//     dialect: "mysql"
// })

module.exports = objsequelize
