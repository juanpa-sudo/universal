const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(fileUpload());

app.use(require("./routes/index.js"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
