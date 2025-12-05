const service = require("./product.service");

exports.createProduct = async (req, res) => {
  try {
    const p = await service.addProduct(req.body);
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const data = await service.getProducts();
    res.json(data);
  } catch {
    res.status(500).json({ message: "Error" });
  }
};
