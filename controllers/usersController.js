const userService = require("../service/userService");

class UsersController {
  async getContacts(req, res, next) {
    try {
      const { name, phone, email } = req.body;
      console.log("req", req.body);

      const userData = await userService.contacts(name, phone, email);

      return res.status(200).json(userData);
    } catch (e) {
      next(e);
      console.log("e", e);
    }
  }
}

module.exports = new UsersController();
