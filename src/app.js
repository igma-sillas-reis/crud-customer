import express from "express";
import routes from "./routes/index.js";
import apiErrorHandler from "./exceptions/index.js";

const app = express();

app.use(express.json());

routes(app);

app.use(apiErrorHandler);

export default app;
