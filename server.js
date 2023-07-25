require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS
app.use(express.static("public"));

app.get("/api/domaininfo/:domain", async (req, res) => {
  const { domain } = req.params;
  const apiUrl = `https://api.freenom.com/v2/domain/getinfo?email=${process.env.API_EMAIL}&password=${process.env.API_PASSWORD}&domainname=${domain}`;

  try {
    const apiRes = await fetch(apiUrl);
    const data = await apiRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
