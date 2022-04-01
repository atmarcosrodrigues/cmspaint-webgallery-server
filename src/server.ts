import "./database";
import { app } from "./app";

/**
 *  Server App Start
 * 
 */

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Web Gallery Server is running on PORT ${PORT}`));