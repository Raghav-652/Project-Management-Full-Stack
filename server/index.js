import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import express from "express";
import morgan from "morgan";
import dbConnection from "./utils/index.js";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
// import { Routes } from "react-router-dom";



import routes from "./routes/index.js";


dotenv.config();


dbConnection();

const PORT = process.env.PORT || 8800

const app = express();


app.use(cors({

    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE"],
 credentials: true,

 allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers

})

);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api",routes);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));