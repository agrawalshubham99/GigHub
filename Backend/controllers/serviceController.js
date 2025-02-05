const Service = require("../models/Service");

exports.createService = async (req, res) => {
  try {
    const { title, description, pricePerHour } = req.body;
    const service = new Service({
      title,
      description,
      pricePerHour,
      provider: req.userId,
    });
    await service.save();
    res.json(service);
  } catch (e) {
    res.status(400).json({ message: "Error creating service" });
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().populate("provider");
    res.json(services);
  } catch (e) {
    res.status(400).json({ message: "Error fetching services" });
  }
};

exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("provider");
    res.json(service);
  } catch (e) {
    res.status(400).json({ message: "Error fetching service" });
  }
};
