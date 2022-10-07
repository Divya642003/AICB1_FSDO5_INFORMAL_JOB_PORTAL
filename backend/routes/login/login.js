const router = require("express").Router();
const loginController = require('../../controllers/login/loginController');
const {body, validationResult}= require(`express-validator`);

//login a User using: POST "/api/auth/login/admin"
router.post('/login/admin',[
    //validating the request body parameters
    body('email',"Enter a valid email").isEmail(),
    body(`password`,"Password cannot be empty").exists()
], loginController.admin_login);
/*********************************************************************************************************************** */

//login a User using: POST "/api/auth/login/applicant"
router.post('/login/applicant',[
    //validating the request body parameters
    body('mobile',"Enter a valid mobile no").isNumeric().isLength(10),
    body(`password`,"Password cannot be empty").exists()
], loginController.applicant_login);
/*********************************************************************************************************************** */


//login a User using: POST "/api/auth/login/recuiter"
router.post('/login/recuiter',[
    //validating the request body parameters
    body('mobile',"Enter a valid mobile no").isNumeric().isLength(10),
    body(`password`,"Password cannot be empty").exists()
], loginController.recuiter_login);
/*********************************************************************************************************************** */


module.exports = router;