const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // Only allow your React app
  }),
);
app.use(express.static("public"));

app.get("/api/stats", (req, res) => {
  res.json({
    totalAssets: "$2.6M",
    occupancyRate: "60.4%",
    globalHospitals: 8,
    doctors: 38,
    availableOccupancy: "57/80",
    visitedPatientsChange: "^22%",
    totalPatients: "1,40,570",
    centerName: "The Premium Healthcare Center",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
