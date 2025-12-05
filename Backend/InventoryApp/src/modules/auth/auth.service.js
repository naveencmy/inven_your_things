const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const repo = require("./auth.repo");

exports.register = async ({ name, email, password, role }) => {
  const user = await repo.findByEmail(email);
  if (user) throw new Error("Email already registered");

  const hash = await bcrypt.hash(password, 10);

  return repo.createUser({
    name,
    email,
    password: hash,
    role: role || "worker"
  });
};

exports.login = async ({ email, password }) => {
  const user = await repo.findByEmail(email);
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  };
};
