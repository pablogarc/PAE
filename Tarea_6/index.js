const express = require("express");
require("dotenv").config();

const database = require("./database");
const apiRoutes = require("./src/api");

const app = express();
const port = process.env.PORT || 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger.json");
const swaggerDocument = swaggerJsDoc(swaggerOptions);

app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", apiRoutes);

/**
 * @swagger
 * /test:
 *   get:
 *     description: this is a test endpoint
 *     parameters:
 *       - in: query
 *         name: ramon
 *         description: ramon's lastname
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: endpoint works string
 */
app.get("/test", (req, res) => {
  res.send("test works!");
});

database
  .connect()
  .then((client) => {
    const db = client.db("Users");
    database.db(db);

    app.listen(port, () => {
      console.log("app is running in port " + port);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database");
  });
