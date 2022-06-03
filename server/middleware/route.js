const express = require("express");
const router = express.Router();

const { registerPhone,registerEmail, loginEmail,loginPhone, deleteUser } = require("./auth");
const { adminAuth } = require("../middleware/auth");

router.route("/registerPhone").post(registerPhone);
router.route("/registerEmail").post(registerEmail);
router.route("/loginPhone").post(loginPhone);
router.route("/loginEmail").post(loginEmail);
router.route("/deleteUser").delete(adminAuth, deleteUser);
//router.route("/getUsers").get(getUsers);

module.exports = router;