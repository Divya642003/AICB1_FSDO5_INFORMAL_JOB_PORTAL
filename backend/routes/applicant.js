const router = require("express").Router();
const applicantController = require('../controllers/applicantController');


router.post("/", applicantController.applicant_create);
router.get("/", applicantController.applicant_all);
router.get("/:applicantId", applicantController.applicant_details);
router.put("/:applicantId", applicantController.applicant_update);
router.delete("/:applicantId", applicantController.applicant_delete);

module.exports = router;