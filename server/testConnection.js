const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();
const mongoose = require("mongoose");

async function test() {
  try {
    console.log("Connecting...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected Successfully");
    process.exit(0);

  } catch (err) {
    console.error("❌ Error:");
    console.error(err.message);
    process.exit(1);
  }
}

test();