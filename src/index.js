import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import ApiRoutes from "./routes/index.js"

mongoose.connect("mongodb+srv://technicalTest:test@cluster0.spmvli7.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("connected to db"))
    .catch(() => {
        console.log("can t connect to db");
    })

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", ApiRoutes);

const server = app.listen(8081, () => {
    console.log("listening on 8081");
});

export default app