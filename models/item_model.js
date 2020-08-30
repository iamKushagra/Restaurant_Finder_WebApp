const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Name:{
        type:String,
        required:true
    },
    Tags:{
        type:String,
        required:true
    },
    Area:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Timings:{
        type:Boolean,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Item",ItemSchema, "restaurantdetails");