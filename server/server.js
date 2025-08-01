// import { v2 } from 'cloudinary';
// import Razorpay from 'razorpay';

// import app from './app.js';
// import connectToDB from './config/dbConnection.js'

// // Cloudinary configuration
// v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Razorpay configuration
// export const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// const PORT = process.env.PORT || 5014;


// app.listen(PORT, async () => {
//   // Connect to DB
//   await connectToDB();
//   console.log(`App is running at http://localhost:${PORT}`);
// });
import dotenv from 'dotenv';
dotenv.config();

import { v2 } from 'cloudinary';
import Razorpay from 'razorpay';

import app from './app.js';
import connectToDB from './config/dbConnection.js';

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

const PORT = process.env.PORT || 5014;

const startServer = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to DB:", error);
  }
};

startServer();
