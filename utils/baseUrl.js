const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://hallym-wewe.herokuapp.com";

module.exports = baseUrl;
