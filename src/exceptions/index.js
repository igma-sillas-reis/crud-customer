import ApiException from "./apiException.js";

const apiErrorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof ApiException) {
    res.status(err.statusCode).send(err.message);
  } else {
    console.error(err.stack);
    res.status(500).send("server error");
  }
};

export default apiErrorHandler;
