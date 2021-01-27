const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require("./server/config/mongoose.config");

require("./server/routes/jokes.routes")(app)


app.listen(port,()=> console.log(`Listening on port ${port}`))