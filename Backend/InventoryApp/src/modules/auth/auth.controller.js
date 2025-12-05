const service = require("./auth.service");
// it control's the registeration process
exports.register = async (req, res) => {
  try {
    const user = await service.register(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
// control the login process control
exports.login = async (req, res) => {
  try {
    const data = await service.login(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
// to create a new user (worker ) but it can only access by the(admin & superadmin)
exports.createWorker = async (req, res) => {
  try {
    const workerData = {
      ...req.body,
      role: "worker"    // force worker role
    };

    const worker = await service.register(workerData);
    res.json({
      message: "Worker created successfully",
      worker
    });
  } catch (err) {
    next(err);
  }
};
