const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fmail", {
 useNewUrlParser: true
})
 .then(() => console.log("Connected to MongoDB..."))
 .catch(err => console.error(err));

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

process.on("unhandledRejection", e => {
 console.log(e.message);
 process.exit(1);
});
