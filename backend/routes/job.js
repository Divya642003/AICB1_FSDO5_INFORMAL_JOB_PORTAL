const router = require("express").Router();
const jobController = require('../controllers/jobController');

const verifyRecuiter = require(`../middleware/verifyRecuiter`);
const verifyApplicant = require(`../middleware/verifyApplicant`);


router.post("/", verifyRecuiter, jobController.job_create);
router.get("/", verifyApplicant, jobController.job_all);
router.get("/:jobId", verifyApplicant, jobController.job_details);
router.put("/:jobId", verifyRecuiter, jobController.job_update);
router.delete("/:jobId", verifyRecuiter, jobController.job_delete);

module.exports = router;