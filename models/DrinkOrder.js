'use strict';

var mongoose = require('mongoose');

var drinkOrderSchema = mongoose.Schema({
  //Unique drink order ID
  drinkOrderID: String,
  //Customer who ordered
  customerID: String,
  //Kind of Drink
  drinkID: String,
  //Bartender who makes drink
  bartenderID: {type: String, default: null},
  //Is the drink being made?
  orderInProgress: {type: Boolean, default: false},
  //Is it visible in the queue?
  orderInQueue: {type: Boolean, default: true}
});

module.exports = mongoose.model('DrinkOrder', drinkOrderSchema);
