const express = require('express');
var cors = require('cors');
const v1Router = require("./v1/routes/routes");
const { PORT } = require("./config/variablesConfig");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/", v1Router);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));