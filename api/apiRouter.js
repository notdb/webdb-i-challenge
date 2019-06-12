const dbThing = require("../data/accounts-model.js");
const router = require("express").Router();

//read request
router.get("/", async (req, res) => {
  try {
    const api = await dbThing.find(req.query);
    res.status(200).json(api);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error retriving the accounts"
    });
  }
});

//post request

router.post("/", async (req, res) => {
  try {
    const api = await dbThing.add(req.body);
    res.status(200).json(api);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error retrieving the accounts"
    });
  }
});

//update request

router.put("/:id", async (req, res) => {
  try {
    const api = await dbThing.update(req.params.id, req.body);
    if (!req.body.name) {
      res.status(400).json({ message: "please add a name" });
    } else {
      res.status(200).json(api);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error updating account"
    });
  }
});

//delete request

router.delete("/:id", async (req, res) => {
  try {
    const api = await dbThing.remove(req.params.id);
    res.status(200).json(api);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error deleting account"
    });
  }
});

module.exports = router;
