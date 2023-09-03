const mongoose = require("mongoose");
const dbName = "wanderin_db";
mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to ${dbName}!`))
.catch((err)=>console.log(err));     