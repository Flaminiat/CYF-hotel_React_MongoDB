const router = require("express").Router();
let Booking = require("../models/booking");

router.route("/").get((req, res) => {
  Booking.find()
    .then(bookings => res.json(bookings))
    .catch(err => res.status(404).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const firstName = req.body.firstName;
  const surname = req.body.surname;
  const email = req.body.email;
  const roomId = Number(req.body.roomId);
  const checkInDate = Date.parse(req.body.checkInDate);
  const checkOutDate = Date.parse(req.body.checkOutDate);
  const duration = Number(req.body.duration);

  const newBooking = new Booking({
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate,
    duration
  });

  newBooking
    .save()
    .then(() => res.json("Booking added!"))
    .catch(err => res.status(404).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Booking.findById(req.params.id)
    .then(booking => res.json(booking))
    .catch(err => res.status(404).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Booking.findByIdAndDelete(req.params.id)
    .then(() => res.json("Booking deleted."))
    .catch(err => res.status(404).json("Error: " + err));
});

module.exports = router;
