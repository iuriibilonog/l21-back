const usersController = require("../controllers/usersController");
const sgMail = require("@sendgrid/mail");
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

    return {
      name,
      phone,
      email,
    };
  }
}

module.exports = new UserServices();
