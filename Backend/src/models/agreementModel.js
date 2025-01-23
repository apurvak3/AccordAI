const mongoose = require("mongoose");

const AgreementSchema = new mongoose.Schema({
  fileName: String,
  filePath: String,
  extractedData: Object,
  summary: String,
  insights: Object,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Agreement", AgreementSchema);
