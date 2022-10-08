const router = require("express").Router();
const applyRequestController = require('../controllers/applyRequestController');
const {body, validationResult}= require(`express-validator`);

const verifyRecuiter = require(`../middleware/verifyRecuiter`);
const verifyApplicant = require(`../middleware/verifyApplicant`);

router.post("/", verifyApplicant, applyRequestController.applyRequest_create);

router.get("/", verifyRecuiter, applyRequestController.applyRequest_all);
router.delete("/:applicantId", verifyRecuiter, applyRequestController.applyRequest_delete);

module.exports = router;