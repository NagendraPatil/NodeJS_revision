const express = require("express");
const router = express.Router();

const {
  handleGetAllUser,
  getUserById,
  updateUserById,
  createNewUser,
  deleteUserById,
} = require("../controllers/user");

router.route("/").get(handleGetAllUser).post(createNewUser);

router.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUserById);

module.exports = router;
