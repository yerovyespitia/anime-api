const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const view = require("./routes/view")
const season = require("./routes/season")

const cors = require("cors")

dotenv.config()
app.use(express.json())

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
)

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

app.use("/api/view", view)
app.use("/api/season", season)

app.get("/", (req, res) => {
  res.send("API")
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port 4000")
})
