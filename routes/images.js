const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json([{
    _id: "6557322cdbe5c62804eeba5d",
    name: "amenitie",
    cover: "https://i.postimg.cc/Nfpm2SDk/tasman.webp"
  },

  {
    _id: "6557322cdbe5c62804eeba5c",
    name: "Room",
    cover: "https://i.postimg.cc/qR166CXM/rosewood.jpg"
  },

  {
    _id: "6557322cdbe5c62804eeba5e",
    name: "amenitie",
    cover: "https://i.postimg.cc/GtJLs01P/wiven.webp"
  },

  {
    _id: "6557322cdbe5c62804eeba5f",
    name: "Room",
    cover: ""
  },

  {
    _id: "6557322cdbe5c62804eeba60",
    name: "Room",
    cover: ""
  },

  {
    _id: "6557322cdbe5c62804eeba61",
    name: "Room",
    cover: ""
  }

]);
});

module.exports = router;
