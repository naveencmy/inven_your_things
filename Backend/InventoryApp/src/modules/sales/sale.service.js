const db = require("../../config/db");
const repo = require("./sale.repo");

exports.makeSale = async ({ productId, qty }) => {
  const client = await db.connect();

  try {
    await client.query("BEGIN");

    const stock = await client.query(
      `SELECT qty FROM products WHERE id=$1`, [productId]
    );

    if (stock.rows.length === 0) throw new Error("Product not found");
    if (stock.rows[0].qty < qty) throw new Error("Insufficient stock");

    await client.query(
      `UPDATE products SET qty = qty - $1 WHERE id=$2`,
      [qty, productId]
    );

    const sale = await repo.insertSale(productId, qty, client);

    await client.query("COMMIT");
    return sale;

  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};
