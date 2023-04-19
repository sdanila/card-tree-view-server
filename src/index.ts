require('dotenv').config()
import express, { Application } from "express";
import userRouter from "./routes/user.js";
import cors from "cors";
import Images from './models/models';

const app: Application = express();

const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use('/api', userRouter);

app.get('/', async (req, res) => {
  try {
    const images = await Images.findOne();
    res.send(images);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`)
});