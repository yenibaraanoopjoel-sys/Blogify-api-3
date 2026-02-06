const express = require("express");
const postsRouter = require("./src/routes/posts.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Blogify API");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
