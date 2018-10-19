const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let DogModel = {};
// name - s, breed - s, age - n, createddate - n
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports = {
  DogModel,
  DogSchema,
};
