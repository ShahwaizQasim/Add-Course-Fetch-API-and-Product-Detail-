import mongoose from "mongoose";

export default async function ConnectDB() {
  let isConnected = false;
  if (isConnected) {
    console.log("DB is already connected");
  }

  try {
    if (isConnected) {
        let connected = await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB is connected');
        
        if (connected.connection.readyState == 1) {
          isConnected = true;
        }
      }
  } catch (error) {
    console.log('error=>', error);
    
  }
}
