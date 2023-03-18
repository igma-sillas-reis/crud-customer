import customersRouter from "./customersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("CRUD Customers");
  });

  app.use("/customers", customersRouter);
};

export default routes;
