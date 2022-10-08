const router = require("express").Router();
const recuiterController = require('../controllers/recuiterController');
const verifyRecuiter = require(`../middleware/verifyRecuiter`);
const verifyAdmin = require(`../middleware/verifyAdmin`);
const verifyApplicant = require(`../middleware/verifyApplicant`);


router.post("/", verifyAdmin, recuiterController.recuiter_create);
router.get("/", verifyApplicant, recuiterController.recuiter_all);
router.get("/:recuiterId", verifyRecuiter,  recuiterController.recuiter_details);
router.put("/:recuiterId", verifyRecuiter, recuiterController.recuiter_update);
router.delete("/:recuiterId", verifyRecuiter, recuiterController.recuiter_delete);

module.exports = router;