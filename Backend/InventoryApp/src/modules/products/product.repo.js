const db = require("../../config/db");

exports.create = async ({ name, price, qty }) => {
  const res = await db.query(
    `INSERT INTO products(name, price, qty)
     VALUES ($1,$2,$3)
     RETURNING *`,
    [name, price, qty]
  );
  return res.rows[0];
};

exports.getAll = async () => {
  const res = await db.query(`SELECT * FROM products ORDER BY id DESC`);
  return res.rows;
};
