const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
  console.log("Connected to DB");
}).catch(err => console.error("Error connecting to DB:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "657f2c5d604b0e6150e8ca27"}));
    await Listing.insertMany(initData.data);
    console.log("Data was saved successfully");
  } catch (error) {
    console.error("Error saving data:", error.message);
  }
};

initDB();


