const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const anime = require("./routes/anime")

// Middlewares
dotenv.config()
app.use(express.json())

// Cors
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
)

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

// Routes
app.use("/api/anime", anime)
app.get("/", (req, res) => {
  res.send("Anime Api Running")
})

// Listen to server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000")
})
