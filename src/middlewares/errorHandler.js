//Centralized error handling function
const errorHandling = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    status: 500,
    message: "Somethign went wrong",
    error: err.message,
  });
};


export default errorHandling