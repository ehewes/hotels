// Import packages
const cors = require('cors');
const express = require("express");
const home = require("./routes/images");

// Middlewares
const app = express();
app.use(express.json());
app.use(cors())

// Routes
app.use("/images", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
