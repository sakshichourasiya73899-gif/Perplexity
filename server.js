
import dns from "dns"
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

import "dotenv/config";
import app from "./src/app.js"


app.listen(process.env.PORT, () => {
    
    console.log(process.env.PORT)
    console.log(`Server is running on port ${process.env.PORT}`)
});