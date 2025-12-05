const repo = require("./product.repo");

exports.addProduct = async (data) => {
  if (!data.name || !data.price || !data.qty)
    throw new Error("Missing required fields");

  return repo.create(data);
};

exports.getProducts = async () => {
  return repo.getAll();
};
