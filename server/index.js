import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const AppStart = async () => {
  try {
    await mongoose.connect(process.env.BD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT || 4000);
  } catch (e) {
    console.log(e);
  }
};

AppStart();
