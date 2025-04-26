import mongoose from 'mongoose';

const connetDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true
    });

    mongoose.connection.on('connected', () => {
      console.log('Database Connected!');
    });

  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1); // Exit the app if connection fails
  }
};

export default connetDB;
