const root = (req, res) => {
  res.json({
    message: "Welcome to OnPlainSight API."
  });
};

module.exports = {
  root,
};
