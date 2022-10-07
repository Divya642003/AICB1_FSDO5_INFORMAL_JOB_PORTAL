const router = require("express").Router();
const adminController = require('../controllers/adminController');
const {body, validationResult}= require(`express-validator`);

const verifyAdmin = require(`../middleware/verifyAdmin`);

router.post("/",[

    //validating the request body parameters
    body('name',`Enter a valid name`).isLength({min:3}),
    body('email',"Enter a valid email").isEmail(),
    body(`password`,"Password must be atleast 5 characters ").isLength({min:5})

], adminController.admin_create);
router.get("/", verifyAdmin, adminController.admin_all);
router.get("/:adminId", verifyAdmin,  adminController.admin_details);
router.put("/:adminId", verifyAdmin, adminController.admin_update);
router.delete("/:adminId", verifyAdmin, adminController.admin_delete);

module.exports = router;