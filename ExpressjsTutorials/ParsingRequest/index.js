const express = require("express");
const bodyParser = require("body-parser");
const Productrouter=require("./routes/products")
const userRouter=require("./routes/user")
const handleme=require("./routes/handleme")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Productrouter);
app.use(userRouter);
app.use(handleme)
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});


