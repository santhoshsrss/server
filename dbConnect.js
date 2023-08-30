const mongoose = require("mongoose");

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  mongoose.connect(process.env.MONGO_URL, connectionParams);

  mongoose.connection.on("connected", () => {
    console.log("Connected to Database Successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error while connecting to Database: " + err);
  });
  mongoose.connection.on("disconnect", () => {
    console.log("MongoDB connection disconnected");
  });
};

module.exports = dbConnect;
