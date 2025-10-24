import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    allowedHeaders: ["Authorization", "content-type"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Hello API" });
});

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}/api`);
});

server.on("error", (err) => {
  console.log("Server error :", err);
});
