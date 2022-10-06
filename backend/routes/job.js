const router = require("express").Router();
const jobController = require('../controllers/jobController');


router.post("/", jobController.job_create);
router.get("/", jobController.job_all);
router.get("/:jobId", jobController.job_details);
router.put("/:jobId", jobController.job_update);
router.delete("/:jobId", jobController.job_delete);

module.exports = router;