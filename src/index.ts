require('dotenv').config()
import express, { Application } from "express";
import userRouter from "./routes/user.js";

const app: Application = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`)
});