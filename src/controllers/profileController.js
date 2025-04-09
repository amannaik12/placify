exports.getProfile = (req, res) => {
  const { name, email, phone, gender, age, resume } = req.user;
  res.json({ name, email, phone, gender, age, resume });
};

exports.updateProfile = async (req, res) => {
  const { phone, gender, age } = req.body;
  const resumePath = req.file ? req.file.path : req.user.resume;

  req.user.phone = phone;
  req.user.gender = gender;
  req.user.age = age;
  req.user.resume = resumePath;
  await req.user.save();

  res.json({ message: 'Profile updated' });
};
