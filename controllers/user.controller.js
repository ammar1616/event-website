const { contactus_clients, joinus_speaker, joinus_sponsor, joinus_partner, joinus_exhibitor, joinus_volunteer } = require("../models/user.model")

exports.contactus = async(req, res) => {
    let { name, email, number, subject, message } = req.body
    contactus_clients.create({
        name,
        email,
        number,
        subject,
        message
    })
    res.redirect('/')
}


exports.speaker = async(req, res) => {
    let { name, email, job_title, company_name, number, country } = req.body
    joinus_speaker.create({
        name,
        email,
        job_title,
        company_name,
        number,
        country
    })
    res.redirect('/')
}

exports.sponsor = async(req, res) => {
    let { name, email, job_title, company_name, number, country } = req.body
    joinus_sponsor.create({
        name,
        email,
        job_title,
        company_name,
        number,
        country
    });
    res.redirect('/')
}

exports.partner = async(req, res) => {
    let { name, email, job_title, company_name, number, web_url, country } = req.body
    joinus_partner.create({
        name,
        email,
        job_title,
        company_name,
        number,
        web_url,
        country
    })
    res.redirect('/')
}

exports.exhibitor = async(req, res) => {
    let { name, email, job_title, company_name, number, country, startup_or_corporate } = req.body
    joinus_exhibitor.create({
        name,
        email,
        job_title,
        company_name,
        number,
        country,
        startup_or_corporate
    })
    res.redirect('/')
}

exports.volunteer = async(req, res) => {
    let { name, email, job_title, company_name, number, dateofbirth, city, fb_url, edu, attend_before, committee, accomodation } = req.body
    joinus_volunteer.create({
        name,
        email,
        job_title,
        company_name,
        number,
        dateofbirth,
        city,
        fb_url,
        edu,
        attend_before,
        committee,
        accomodation
    })
    res.redirect('/')
}