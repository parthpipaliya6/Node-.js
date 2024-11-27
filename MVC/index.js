const exports = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();

app.use("/products",ProductsRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the e-commerce API!");
});

const PORT = process.env.PORT || 8090;
app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
})