const router = require("express").Router()

const authcontroller = require("../controllers/user.controller")

router.post("/contactus", authcontroller.contactus)
router.post("/speaker", authcontroller.speaker)

router.post("/sponsor", authcontroller.sponsor)
router.post("/partner", authcontroller.partner)
router.post("/exhibitor", authcontroller.exhibitor)
router.post("/volunteer", authcontroller.volunteer)


module.exports = router