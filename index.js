require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/schema");

const main = () => {
  const port = process.env.PORT || 5000;

  const app = express();
  connectDB();

  app.use(cors());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === "development",
    })
  );

  app.listen(port, () => console.log(`Server running on: ${port}`));
};

main();
