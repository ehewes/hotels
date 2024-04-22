const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json([{
    _id: "6557322cdbe5c62804eeba5d",
    name: "amenitie",
    cover: "https://iili.io/JvL4csn.md.png"
  },

  {
    _id: "6557322cdbe5c62804eeba5c",
    name: "Room",
    cover: "https://iili.io/J8F5aGj.md.jpg"
  },

  {
    _id: "6557322cdbe5c62804eeba5e",
    name: "amenitie",
    cover: "https://iili.io/J8F51aV.md.jpg"
  },

  {
    _id: "6557322cdbe5c62804eeba5f",
    name: "Room",
    cover: "https://i.ibb.co/Y0pGBGq/img4.jpg"
  },

  {
    _id: "6557322cdbe5c62804eeba60",
    name: "Room",
    cover: "https://i.ibb.co/HpzH5fm/img5.jpg"
  },

  {
    _id: "6557322cdbe5c62804eeba61",
    name: "Room",
    cover: "https://i.ibb.co/fHknkrm/img6.jpg"
  }

]);
});

module.exports = router;
