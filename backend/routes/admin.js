const router = require("express").Router();
const adminController = require('../controllers/adminController');


router.post("/", adminController.admin_create);
router.get("/", adminController.admin_all);
router.get("/:adminId", adminController.admin_details);
router.put("/:adminId", adminController.admin_update);
router.delete("/:adminId", adminController.admin_delete);

module.exports = router;