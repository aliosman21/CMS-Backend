const router = require("express").Router();
const jwt = require("jsonwebtoken");
const model = require("./DBdealer");

router.post("/login", async (req, res) => {
   //will check the database and send back true or false with jwt

   console.log(req.body.email);
   model.checkCredentials(req.body.email, req.body.password);

   res.send({ title: "GOOD" });
});

module.exports = router;
