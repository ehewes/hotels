const express = require("express");
const router = express.Router();

const myJsonData = [{
    _id: "655a6dab065656525da64889",
    email: "testing@gmail.com",
    title: "Deluxe",
    max: 1,
    date: "30-11-2023",
    cover: "",
    review: "off"
  },

  {
    _id: "660c271f1be01778f5130d31",
    email: "hello@gmail.com",
    title: "Deluxe",
    max: 1,
    date: "30-12-2023",
    cover: "",
    review: "off"
  }]

router.get("/:name", async (req, res, next) => {
    const { name } = req.params
  
    const filter = myJsonData.find(email => email.email === name)
  
    return res.end(JSON.stringify(filter));
});
  
router.get("/", (req, res, next) => {
    res.end(JSON.stringify(myJsonData))
})

module.exports = router;