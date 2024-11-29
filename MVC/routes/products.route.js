const { Router } = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const upload = require("../utils/imageupload");

const productRoute = Router();
productRoute.get("/", getProducts);
productRoute.get("/:productId", getProductById);
productRoute.post("/", upload.single("img"), createProduct);
productRoute.delete("/:productId", deleteProduct);
productRoute.patch("/:productId", updateProduct);

module.exports = productRoute;