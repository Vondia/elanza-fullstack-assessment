const express = require("express");
const cors = require("cors");
const app = express();
const CareRequest = require("./models").careRequest;

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Fetching all care requests
app.get("/carerequests", async (req, res, next) => {
  try {
    console.log("Im getting all the care requests");
    const allCareRequests = await CareRequest.findAll({
      order: [["startDate", "ASC"]],
    });
    res.status(200).send(allCareRequests);
  } catch (error) {
    next(error.message);
  }
});

// posting a new care request
app.post("/carerequests", async (req, res) => {
  const { clientName, careNeeded, startDate, endDate, extraInformation } =
    req.body;
  if (!clientName || !careNeeded || !startDate || !endDate) {
    return res.status(400).send("Please provide all information needed");
  }
  try {
    const newCareRequest = await CareRequest.create({
      clientName,
      careNeeded,
      startDate,
      endDate,
      extraInformation,
    });
    res.status(201).json({ ...newCareRequest.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).send({ message: "There is an error" });
    }

    return res.status(400).send({ message: "you added new care request" });
  }
});

//get an request by id
app.get("/carerequests/:careRequestId", async (req, res, next) => {
  try {
    const requestId = parseInt(req.params.careRequestId);
    const request = await CareRequest.findByPk(requestId);
    if (!request) {
      res.status(404).send("Request not found");
    } else {
      res.send(request);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
