//db.js class 
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use the connection string from.env to establish a connection to MongoDB.
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1); // Process exit with failure
  }
};

export default connectDB;
