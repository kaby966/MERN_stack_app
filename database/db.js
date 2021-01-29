const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb+srv://resturant-user:testing123@resturantapp.r5m52.mongodb.net/test?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        console.log('database connection success');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;

