const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env || 5000 ;

async function start() {
    try {
        await mongoose.connect('mongodb+srv://HamzatKot:19082002@cluster0.0qerfhd.mongodb.net/ToDo-List?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFiedAndmodify: true
    })

    app.listen(PORT,() => {
        console.log(`Server started on port ${PORT}`);
    })
    } catch (error) {
       console.error(error);
    }
}