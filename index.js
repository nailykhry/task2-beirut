const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const mainRouter = require("./router.js");
app.use("/api", mainRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
