const usersController = require("../controllers/usersController");
const sgMail = require("@sendgrid/mail");
const express = require("express");
const router = express.Router();
const { emailTemplate } = require("./emailTamplate");

class UserServices {
  async contacts(name, phone, email) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // const mail = confirmEmail(
    //   `${process.env.API_URL}/api/users/activate/${activationLink}`,
    //   name
    // );

    const mail = emailTemplate(name, phone, email);

    const msg = {
      to: "iuriibilonog@gmail.com",
      from: "maintenance.questify@gmail.com",
      subject: "Please, check new order!",
      text: `name: ${name}, phone:${phone}, email: ${email}`,
      // html: mail,
    };

    await sgMail.send(msg);

    // const userDto = new UserDto(user); // id, email, isActivated
    // const tokens = tokenService.generateTokens({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);
    // let fields = [
    //   "<b>Name</b>: " + name,
    //   "<b>Phone</b>: " + phone,
    //   "<b>Email</b>: " + email,
    // ];
    // console.log("fields", fields);
    // let msg = "";

    // fields.forEach((field) => {
    //   msg += field + "\n";
    // });

    // msg = encodeURI(msg);
    // console.log("msg", msg);
    // const token = "5431076612:AAEx5vBUrzTw7Nc60il1BlIZbONUxg-Da78";
    // const chat_id = "-613429546";

    // try {
    //   router.post(
    //     `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`
    //   );
    //   console.log("first");
    //   console.log("token", token);
    //   console.log("chat_id", chat_id);
    // } catch (error) {
    //   console.log("error", error);
    // }

    return {
      name,
      phone,
      email,
    };
  }
}

module.exports = new UserServices();
