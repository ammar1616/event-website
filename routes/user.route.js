const router = require("express").Router()

const usercontroller = require("../controllers/user.controller")

router.post("/contactus", usercontroller.contactus)
router.post("/speaker", usercontroller.speaker)

router.post("/sponsor", usercontroller.sponsor)
router.post("/partner", usercontroller.partner)
router.post("/exhibitor", usercontroller.exhibitor)
router.post("/volunteer", usercontroller.volunteer)

router.post("/ticket", usercontroller.ticket)


module.exports = router