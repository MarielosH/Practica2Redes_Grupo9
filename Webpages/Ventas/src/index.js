const express = require('express')
const app = express();
const path = require("path");
const morgan = require("morgan")
const booksRoutes = require("./routes/books");

//settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/",booksRoutes);
app.use(express.static(path.join(__dirname,"public")))


app.listen(app.get("port"), () => {

    console.log(`server on port ${app.get("port")}.`)
})