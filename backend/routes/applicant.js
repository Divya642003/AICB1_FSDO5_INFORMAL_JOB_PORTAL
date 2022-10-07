const router = require("express").Router();
const applicantController = require('../controllers/applicantController');
const {body, validationResult}= require(`express-validator`);

const verifyRecuiter = require(`../middleware/verifyRecuiter`);
const verifyApplicant = require(`../middleware/verifyApplicant`);

router.post("/",[
     //validating the request body parameters
     body('name',`Enter a valid name`).isLength({min:3}),
     body('mobile_number',"Enter a valid mobile number").isNumeric().isLength(10),
     body(`password`,"Password must be atleast 5 characters ").isLength({min:5}),
     body('adharcard_number',"Adharcard number must be atleast 10 characters").isLength({min:10}),
     body('address','Enter valid address').isLength({min:3}),
     
], applicantController.applicant_create);
router.get("/", verifyRecuiter, applicantController.applicant_all);
router.get("/:applicantId", verifyApplicant, applicantController.applicant_details);
router.put("/:applicantId", verifyApplicant, applicantController.applicant_update);
router.delete("/:applicantId", verifyRecuiter, applicantController.applicant_delete);

module.exports = router;