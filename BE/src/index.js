const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
const apiRoutes = require("./router/api");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use("/api", apiRoutes);
app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
