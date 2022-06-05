const app = require("../app");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, () => {
    console.log(`Server connection successfully on port "${PORT}".`);
    console.log("PORT", PORT);
  });
} catch (error) {
  console.log("Server connection Error: ");
  process.exit(1);
}
