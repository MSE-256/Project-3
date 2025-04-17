const { Resend } = require("resend");

const { env } = require("../config");
console.log("CLAVE RESEND:", env.RESEND_API_KEY); // prueba clave

const { ApiError } = require("./api-error");


const resend = new Resend(env.RESEND_API_KEY);
const sendMail = async (mailOptions) => {
  const { error } = await resend.emails.send(mailOptions);
  if (error) {
    throw new ApiError(500, "Unable to send email");
  }
};

module.exports = {
  sendMail,
};
