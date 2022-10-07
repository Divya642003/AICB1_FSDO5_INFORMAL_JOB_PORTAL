const router = require("express").Router();
const adminController = require('../controllers/adminController');
const {body, validationResult}= require(`express-validator`);


router.post("/",[

    //validating the request body parameters
    body('name',`Enter a valid name`).isLength({min:3}),
    body('email',"Enter a valid email").isEmail(),
    body(`password`,"Password must be atleast 5 characters ").isLength({min:5})

], adminController.admin_create);
router.get("/", adminController.admin_all);
router.get("/:adminId", adminController.admin_details);
router.put("/:adminId", adminController.admin_update);
router.delete("/:adminId", adminController.admin_delete);
router.post('/login',[

    //validating the request body parameters
    
    body('email',"Enter a valid email").isEmail(),
    body(`password`,"Password cannot be empty").exists()

],adminController.admin_login);

module.exports = router;