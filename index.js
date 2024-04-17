import express from "express"
import 'dotenv/config'
import pg from "pg";

const connectionString = process.env.DB_CONNECTION_STRING;
PORT = process.env.PORT || 3000

//Check if connection string is not defined and if so throw an error

if(!connectionString) {
    throw new Error(
   "No connection string defined."
    );
}

// export and instance of pg pool to interact with database
export const pool = new pg.Pool({
// pass connection string
    connectionString,
});



const app = express()


app.use(express.json())
// middleware to parse incoming requests with JSON payloads so we can access the data in the request body (req.body)


app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}")
})