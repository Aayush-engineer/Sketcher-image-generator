import mongoose from "mongoose";

const uri = "mongodb+srv://sketcher:sketcher2141@cluster0.8e5xlfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  try {
    await mongoose.connect(uri, { dbName: "sketcher" });
    console.log("✅ MongoDB Connected!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Connection error:");
    process.exit(1);
  }
}

testConnection();
