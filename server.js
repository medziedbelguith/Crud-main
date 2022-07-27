const app = require("./app");
const connectDatabase = require("./config/database");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());

// Connecting to database
connectDatabase();

const server = app.listen(4000, () => {
  console.log(`Server is working on http://localhost:4000`);
});