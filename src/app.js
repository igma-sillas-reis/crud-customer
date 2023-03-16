import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

routes(app);

app.use((err, req, res, next) => {
  console.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).send("server error");
});

export default app;
