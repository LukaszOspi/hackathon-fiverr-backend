const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  desc: String,
  date: Date,
  lat: Number,
  lng: Number,
  participants: String,
  eventId: String,
  owner: String,
  locationName: String,
  category: String,
});

const EventModel = mongoose.model("Event", schema);

module.exports = EventModel;
