const cors = require("cors");

const corsOptions = {
  origin: "https://nicole-calendar-app.netlify.app", // Replace with your Netlify app URL
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

module.exports = cors(corsOptions);
