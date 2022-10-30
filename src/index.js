const express = require('express');
var cors = require('cors');
const v1EmailRouter = require("./v1/routes/emailRoutes");
const { PORT } = require("./config/config");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/email", v1EmailRouter);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));