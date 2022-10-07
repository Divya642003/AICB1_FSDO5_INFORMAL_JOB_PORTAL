const router = require("express").Router();
const recuiterController = require('../controllers/recuiterController');
const {body, validationResult}= require(`express-validator`);

router.post("/",[
    //validating the request body parameters
    body('name',`Enter a valid name`).isLength({min:3}),
    body('mobile_number',"Enter a valid mobile number").isNumeric().isLength(10),
    body(`password`,"Password must be atleast 5 characters ").isLength({min:5}),
    body('adharcard_number',"Adharcard number must be atleast 10 characters").isLength({min:10}),
    body('address','Enter valid address').isLength({min:3}),
    
], recuiterController.recuiter_create);
router.get("/", recuiterController.recuiter_all);
router.get("/:recuiterId", recuiterController.recuiter_details);
router.put("/:recuiterId", recuiterController.recuiter_update);
router.delete("/:recuiterId", recuiterController.recuiter_delete);
router.post('/login',[

    //validating the request body parameters
    
    body('mobile_number',"Enter a valid email").isLength({min:10}),
    body(`password`,"Password cannot be empty").exists()

],adminController.recuiter_login);

module.exports = router;