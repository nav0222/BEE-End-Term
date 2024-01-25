const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.set('strictQuery', true);
    mongoose
        .connect("mongodb+srv://Nancy:Nancy@lms.9hy51ch.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.error(err.message);
            process.exit(1);
        });
};

module.exports = connectDB;