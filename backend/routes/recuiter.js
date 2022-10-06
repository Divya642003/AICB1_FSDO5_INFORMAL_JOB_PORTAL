const router = require("express").Router();
const recuiterController = require('../controllers/recuiterController');


router.post("/", recuiterController.recuiter_create);
router.get("/", recuiterController.recuiter_all);
router.get("/:recuiterId", recuiterController.recuiter_details);
router.put("/:recuiterId", recuiterController.recuiter_update);
router.delete("/:recuiterId", recuiterController.recuiter_delete);

module.exports = router;