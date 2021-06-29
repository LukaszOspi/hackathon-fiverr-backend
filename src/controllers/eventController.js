const Event = require("./../models/event.model");

// POST
const create = async (req, res, next) => {
  console.log(req.body);

  try {
    const event = new Event({ ...req.body });
    await event.save();
    res.send(event);
    res.status(201);
  } catch {
    res.status(403);
    res.send({ error: "Something went wrong, nothing was saved" });
  }
  console.log("Controller --> Create");
};

//GET all
const show = async (req, res, next) => {
  console.log("Controller --> Show - all");
  try {
    let dbFind = await Event.find({}).exec();
    res.send(dbFind);
    res.status(200);
    console.log(dbFind);
  } catch {
    res.status(404);
    res.send({ error: "Something went wrong" });
  }
};

// GET one
const index = async (req, res, next) => {
  console.log("Controller --> Show - one");
  console.log(req.params);

  try {
    let result = await Event.find({ _id: req.params.id }).exec();
    res.send(result);
    res.status(200).json(result);
    console.log(result);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
};

// PUT
const update = async (req, res, next) => {
  console.log("Controller --> Update");
  console.log(req.params);

  try {
    const postToUpdate = await Event.findOne({ _id: req.params.id }).exec();

    if (req.body.name) {
      postToUpdate.name = req.body.name;
    }
    if (req.body.desc) {
      postToUpdate.desc = req.body.desc;
    }
    if (req.body.date) {
      postToUpdate.date = req.body.date;
    }
    if (req.body.lat) {
      postToUpdate.lat = req.body.lat;
    }
    if (req.body.lng) {
      postToUpdate.lng = req.body.lng;
    }
    if (req.body.participants) {
      postToUpdate.participants = req.body.participants;
    }
    if (req.body.owner) {
      postToUpdate.owner = req.body.owner;
    }
    if (req.body.locationName) {
      postToUpdate.locationName = req.body.locationName;
    }
    if (req.body.category) {
      postToUpdate.category = req.body.category;
    }

    await postToUpdate.save();
    res.send(postToUpdate);
    res.status(201);
  } catch {
    res.status(400);
    res.send({ error: "Post doesn't exist!" });
  }
};

//DELETE
const destroy = async (req, res, next) => {
  console.log("Controller --> Destroy");

  try {
    await Event.deleteOne({ _id: req.params.id });
    res.status(204).send();
    console.log("Post successfully deleted");
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
};

module.exports = {
  create,
  show,
  index,
  update,
  destroy,
};
