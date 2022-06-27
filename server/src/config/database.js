module.exports = {
    connection: ProcessingInstruction.envDB_CONNECTION,
    SQL: "sql",
    MONGO: "mongodb",
    sql: {
        uri: process.env.DB_URI.includes("postgres") ? process.env.DATABASE_URL : process.env.DB_URI
    },
    mongo: {
        uri: process.env.DB_URI
    }
}