const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json([{
    _id: "655a6dab065656525da64889",
    email: "ms7019742@gmail.com",
    title: "Deluxe",
    max: 1,
    date: "30-11-2023",
    cover: "https://i.ibb.co/P69v90R/d1.jpg",
    review: "off"
  },

]);
});

module.exports = router;
