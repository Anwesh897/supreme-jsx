const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Do not go gentle into that good night");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
