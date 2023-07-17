const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  createCustomFortune,
  deleteFortune,
  getLyric,
} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/fotune", createCustomFortune);
app.delete("/api/fortune", deleteFortune);
app.get("/api/lyric", getLyric);

app.listen(4000, () => console.log("Server running on 4000"));
