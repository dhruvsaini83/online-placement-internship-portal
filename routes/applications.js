const express = require("express");
const router = express.Router();
const applications = require("../controllers/applications");

router.post("/jobs/:id/apply", applications.applyJob);
router.get("/my-applications", applications.myApplications);

module.exports = router;
