const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'recruiter'], required: true },
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  appliedInternships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Internship' }],
  phone: String,
  gender: String,
  age: Number,
  resume: String,
});

module.exports = mongoose.model('User', userSchema);
