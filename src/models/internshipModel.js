const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  stipend: { type: String }, // optional
  location: { type: String, required: true },
  requirements: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Internship', internshipSchema);
