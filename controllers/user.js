const { User } = require("../models/user");

async function handleGetAllUser(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "user not found!" });
  }
  return res.json(user);
};

const createNewUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.last_name ||
    !body.job_title ||
    !body.gender
  ) {
    return res.status(400).json({ error: "All fielda are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  res.status(201).json({ status: "user created", user: result });
};

const updateUserById = async (req, res) => {
  let id = req.params.id;
  let user = await User.findByIdAndUpdate(id, { lastName: "PATIL in caps" });
  res.json({
    status: "updated user with id :" + id,
    user: user,
  });
};

const deleteUserById = async (req, res) => {
  let id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json({
    status: "Delete user with id :" + id,
  });
};

module.exports = {
  handleGetAllUser,
  createNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
