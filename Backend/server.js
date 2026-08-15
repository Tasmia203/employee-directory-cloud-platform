const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employees");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Employee Directory API Running"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});