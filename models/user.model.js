const sequelize = require("sequelize")
const objsequelize = require("../configuration/config")

const contactus_clients = objsequelize.define("contactus_client", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    number: {
        type: sequelize.STRING,
        allowNull: false
    },
    subject: {
        type: sequelize.STRING,
        allowNull: false
    },
    message: {
        type: sequelize.STRING,
        allowNull: false
    },
})


const joinus_speaker = objsequelize.define("joinus_speaker", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    job_title: {
        type: sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    number: {
        type: sequelize.STRING,
        allowNull: false
    },
    country: {
        type: sequelize.STRING,
        allowNull: false
    },
})


const joinus_sponsor = objsequelize.define("joinus_sponsor", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    job_title: {
        type: sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    number: {
        type: sequelize.STRING,
        allowNull: false
    },
    country: {
        type: sequelize.STRING,
        allowNull: false
    },
})

const joinus_partner = objsequelize.define("joinus_partner", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    job_title: {
        type: sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    number: {
        type: sequelize.STRING,
        allowNull: false
    },
    web_url: {
        type: sequelize.STRING,
        allowNull: false
    },
    country: {
        type: sequelize.STRING,
        allowNull: false
    },
})



const joinus_exhibitor = objsequelize.define("joinus_exhibitor", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    job_title: {
        type: sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    number: {
        type: sequelize.STRING,
        allowNull: false
    },
    country: {
        type: sequelize.STRING,
        allowNull: false
    },
    startup_or_corporate: {
        type: sequelize.STRING,
        allowNull: false
    },
})

const joinus_volunteer = objsequelize.define("joinus_volunteer", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    job_title: {
        type: sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    number: {
        type: sequelize.STRING,
        allowNull: false
    },
    dateofbirth: {
        type: sequelize.DATEONLY,
        allowNull: false
    },
    city: {
        type: sequelize.STRING,
        allowNull: false
    },
    fb_url: {
        type: sequelize.STRING,
        allowNull: false
    },
    education: {
        type: sequelize.STRING,
        allowNull: false
    },
    attend_before: {
        type: sequelize.STRING,
        allowNull: false
    },
    committee: {
        type: sequelize.STRING,
        allowNull: false
    },
    accomodation: {
        type: sequelize.STRING,
        allowNull: false
    },

})



module.exports = {
    contactus_clients,
    joinus_speaker,
    joinus_sponsor,
    joinus_partner,
    joinus_exhibitor,
    joinus_volunteer
}