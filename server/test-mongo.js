import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log('Connecting to:', process.env.MONGO_URI);
console.log('MONGO_URI exists?', process.env.MONGO_URI ? 'YES' : 'NO');
console.log('JWT_SECRET exists?', process.env.JWT_SECRET ? 'YES' : 'NO');


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });