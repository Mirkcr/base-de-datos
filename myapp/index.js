import pg from 'pg'
// Destructure Client class from the pg module
const { Client } = pg
// Define the connection string to connect to the PostgreSQL database
const connectionString =
'postgresql://mirko:rbYhfAAfyOUYMktHsAkmHn96BIRFSWcO@dpg-cqjrjc2j1k6c73a2kvt0-a.ohio-postgres.render.com/mirko?ssl=true'
// Create a new Client instance with the connection string
const client = new Client({
connectionString,
})
// Define an asynchronous function to create a table using a single
//client connection
async function createTableWithClient() {
try {
// Establish a connection to the database
await client.connect()
// Execute the SQL query to create the table
await client.query(`
      CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        age INTEGER,
        grade INTEGER
      );
    `)
console.log('Table "users" created successfully.')

} catch (error) {
// Log any errors that occur during table creation
console.error('Error creating table:', error)
} finally {
// Close the client connection when done
await client.end()
}
}
// Call the function to create the table
createTableWithClient()