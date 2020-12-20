const router = require("express").Router();

router.post("/login", async (req, res) => {
   //will check the database and send back true or false with jwt
   res.send({ title: "GOOD" });
});

module.exports = router;
