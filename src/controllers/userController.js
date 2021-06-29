const User = require("./../models/user.model");

// POST
const create = async (req, res, next) => {
  console.log(req.body);

  try {
    const User = new User({ ...req.body });
    await User.save();
    res.send(User);
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
    let dbFind = await User.find({}).exec();
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
    let result = await User.find({ _id: req.params.id }).exec();
    res.send(result);
    res.status(200).json(result);
    console.log(result);
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
};

// PUT
const update = async (req, res, next) => {
  console.log("Controller --> Update");
  console.log(req.params);

  try {
    const postToUpdate = await User.findOne({ _id: req.params.id }).exec();

    if (req.body.name) {
      postToUpdate.name = req.body.name;
    }
    if (req.body.surname) {
      postToUpdate.surname = req.body.surname;
    }
    if (req.body.profession) {
      postToUpdate.profession = req.body.profession;
    }
    if (req.body.events) {
      postToUpdate.events = req.body.events;
    }

    await postToUpdate.save();
    res.send(postToUpdate);
    res.status(201);
  } catch {
    res.status(400);
    res.send({ error: "User doesn't exist!" });
  }
};

//DELETE
const destroy = async (req, res, next) => {
  console.log("Controller --> Destroy");

  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(204).send();
    console.log("User successfully deleted");
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
};

module.exports = {
  create,
  show,
  index,
  update,
  destroy,
};
