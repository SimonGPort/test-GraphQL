const express = require("express");
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
// const cors = require("cors");
const userData=require('./MOCK_DATA.json')

// VOIR LE TUTORIAL YOUTUBE : 
// Part1: https://youtu.be/Dr2dDWzThK8
// Part2: https://youtu.be/YyUWW04HwKY

// app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running on "+PORT);
});