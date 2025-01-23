const express = require("express");
const multer = require("multer");
const {
  uploadAgreement,
  extractData,
  generateSummary,
  generateInsights,
} = require("../controllers/agreementController");

const router = express.Router();

// Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/upload", upload.single("agreement"), uploadAgreement);
router.post("/extract", extractData);
router.post("/summarize", generateSummary);
router.post("/insights", generateInsights);

module.exports = router;
