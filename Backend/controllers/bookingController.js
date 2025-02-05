const Booking = require("../models/Booking");
const Service = require("../models/Service");

exports.createBooking = async (req, res) => {
  try {
    const { serviceId, hours } = req.body;
    const service = await Service.findById(serviceId);
    const totalPrice = service.pricePerHour * hours;
    const booking = new Booking({
      service: serviceId,
      user: req.userId,
      hours,
      totalPrice,
    });
    await booking.save();
    res.json(booking);
  } catch {
    res.status(400).json({ message: "Error" });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).populate(
      "service"
    );
    res.json(bookings);
  } catch {
    res.status(400).json({ message: "Error" });
  }
};
