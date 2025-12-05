const db = require("../../config/db");

exports.insertSale = async (productId, qty, client) => {
  const result = await client.query(
    `INSERT INTO sales(product_id, qty)
     VALUES ($1,$2)
     RETURNING *`,
    [productId, qty]
  );
  return result.rows[0];
};
