const Restaurant = require('../models/item_model');

module.exports = {
  getRestaurant: async (req, res, next) => {
    try {
      const result = await Restaurant.getRestaurant();
      return res.json({ message: 'SUCCESS', data: result });
    } catch (err) {
      next(err);
    }
  },
  searchByFood: async (req, res, next) => {
    try {
      const { q, pageNumber, lim } = req.query;
      const page = parseFloat(pageNumber);
      const limit = parseFloat(lim);
      const options = {
        q,
        page,
        limit
      };
      const result = await Restaurant.search(options);
      return res.json({ message: 'SUCCESS', data: result });
    } catch (err) {
      next(err);
    }
  },
}

// const pagination = (model) => async(req, res, next) => {
//     //Results object
//     const results = {
//         results: {},
//         pagination: {},
//         filters: [],
//     }



//     //Filter
//     const category = req.query.category;


//     results.filters.push(category);

//     const match = {}


//     match.Category = category;




//     //Sort
//     const sortVal = parseInt(req.query.sort);
//     results.sort = sortVal;
    
//     let sort = {}

//     if(sortVal === 1) sort = {price:1}
//     if(sortVal === 2) sort = {price:-1}


//     //Search
//     const regex = req.query.regex

//     results.regex = regex;

//     match.Name = new RegExp(regex,"i");
//     match.Area = new RegExp(regex,"i");
//     match.Tags = new RegExp(regex,"i");
//     match.Category = new RegExp(regex,"i");



//     //Pagination
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit);

//     const startIndex = (page - 1) * limit;
//     const endIndex = (page) * limit;
//     const itemsCount = await model
//         .find(match)
//         .countDocuments()
//         .sort(sort)
//         .exec();

//     results.pagination.currentPage = page;
//     results.pagination.limit = limit;
//     results.pagination.pagesCount = Math.ceil(itemsCount / limit);

//     if (endIndex < itemsCount) 
//         results.pagination.next = {
//             page: page + 1,
//             limit: limit
//         }
//     if (startIndex > 0) 
//         results.pagination.prev = {
//             page: page - 1,
//             limit: limit
//         }
//     //Query
//     results.results = await model
//         .find(match)
//         .limit(limit)
//         .sort(sort)
//         .skip(startIndex);

//     req.results = results;
//     next();
// }