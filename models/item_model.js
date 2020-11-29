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

class Restaurant {
    static async getRestaurant() {
      const data = await this.find().limit(8);
      return data;
    }
  
    static async search(options = {}) {
      try {
        const userQuery = await this.aggregate([
            {
              $match: {
                Name: {
                  $regex: options.q,
                  $options: 'i',
                },
              },
            },
            { $skip: options.page > 0 ? ((options.page - 1) * options.limit ) : 0},
            { $limit: options.limit },
            { $sort: { Name : 1 } },
          ]);
          console.log(userQuery);
          return userQuery;
      } catch (err) {
        throw err;
      }
    }
}

ItemSchema.loadClass(Restaurant);

module.exports = mongoose.model("Item", ItemSchema, "restaurantdetails");
