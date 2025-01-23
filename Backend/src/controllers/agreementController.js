const Agreement = require("../models/agreementModel");
const axios = require("axios");
const fs = require("fs");

// Upload Agreement
exports.uploadAgreement = async (req, res) => {
  try {
    const { filename, path } = req.file;

    const agreement = new Agreement({ fileName: filename, filePath: path });
    await agreement.save();

    res.status(201).json({ message: "File uploaded successfully", agreement });
  } catch (error) {
    res.status(500).json({ error: "File upload failed" });
  }
};

// Extract Data
exports.extractData = async (req, res) => {
  try {
    const { fileId } = req.body;
    const agreement = await Agreement.findById(fileId);

    // Use NLP API or Library for extraction
    const extractedData = { parties: "Party A, Party B", dates: "2025-01-30" };
    agreement.extractedData = extractedData;

    await agreement.save();
    res.status(200).json({ message: "Data extracted", extractedData });
  } catch (error) {
    res.status(500).json({ error: "Data extraction failed" });
  }
};

// Generate Summary
exports.generateSummary = async (req, res) => {
  try {
    const { fileId } = req.body;
    const agreement = await Agreement.findById(fileId);

    // OpenAI API call for summarization
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Summarize the following agreement: ${agreement.extractedData}`,
        max_tokens: 200,
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );

    agreement.summary = response.data.choices[0].text.trim();
    await agreement.save();
    res.status(200).json({ message: "Summary generated", summary: agreement.summary });
  } catch (error) {
    res.status(500).json({ error: "Summary generation failed" });
  }
};

// Generate Insights
exports.generateInsights = async (req, res) => {
  try {
    const { fileId } = req.body;
    const agreement = await Agreement.findById(fileId);

    // Dummy insights (replace with logic)
    const insights = { risks: ["Unclear payment terms"], actions: ["Renegotiate payment"] };
    agreement.insights = insights;

    await agreement.save();
    res.status(200).json({ message: "Insights generated", insights });
  } catch (error) {
    res.status(500).json({ error: "Insights generation failed" });
  }
};
