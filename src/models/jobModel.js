const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  salary: { type: String},
  location: { type: String, required: true },
  requirements: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
