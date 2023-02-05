import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import app from "./app.js";

connectDB();
//ROUTES

// llamada server
app.listen(PORT);
console.log(`servver is running port ${PORT} `);
