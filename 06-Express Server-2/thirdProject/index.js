const express = require('express');
const app = express()

app.use(express.json());
app.use("/api/users", require("./routes/api/users.js"));


app.use(express.urlencoded({extended:false}))



app.listen(port = 3000,()=> console.log('Server running on port ${3000}'))



