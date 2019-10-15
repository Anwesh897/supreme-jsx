const express = require("express");
const jsxView = require("express-react-views").createEngine();
const app = express();

app.get("/", (req, res) => {
  res.send("Do not go gentle into that good night");
});

app.set("view engine", "jsx");
app.engine("jsx", jsxView);
app.get("/about", (req, res) => {
  res.render("about", { name: "Anwesh" });
});

app.get("/thoughts", (req, res) => {
  res.render("thoughts");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
