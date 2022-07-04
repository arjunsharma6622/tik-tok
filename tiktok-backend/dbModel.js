const mongoose = require("mongoose")


const tiktokSchema = mongoose.Schema({
    url : String,
    channel : String,
    song : String,
    description : String,
    likes : String,
    messages : String,
    shares : String
})

//the way of exporting the mongoose model schemas out of the file
//without using of direct exports statement
module.exports = mongoose.model('Videos', tiktokSchema);


