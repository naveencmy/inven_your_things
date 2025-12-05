const service = require("./sale.service");

exports.createSale = async (req, res) => {
  try {
    const data = await service.makeSale(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
