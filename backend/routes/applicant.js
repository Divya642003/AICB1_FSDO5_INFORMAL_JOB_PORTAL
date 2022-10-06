const router = require("express").Router();
const applicantController = require('../controllers/applicantController');
const {body, validationResult}= require(`express-validator`);


router.post("/",[
     //validating the request body parameters
     body('name',`Enter a valid name`).isLength({min:3}),
     body('mobile_number',"Enter a valid mobile number").isNumeric().isLength(10),
     body(`password`,"Password must be atleast 5 characters ").isLength({min:5}),
     body('adharcard_number',"Adharcard number must be atleast 10 characters").isLength({min:10}),
     body('address','Enter valid address').isLength({min:3}),
     
], applicantController.applicant_create);
router.get("/", applicantController.applicant_all);
router.get("/:applicantId", applicantController.applicant_details);
router.put("/:applicantId", applicantController.applicant_update);
router.delete("/:applicantId", applicantController.applicant_delete);

module.exports = router;