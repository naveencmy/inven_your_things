exports.auth = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });

    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      next();
    } catch {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};
