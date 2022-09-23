const notFoundHandler = (req, res) => {
  return res.status(404).json({ message: "address not found" });
};

module.exports = notFoundHandler;
