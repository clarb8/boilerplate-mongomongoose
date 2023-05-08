require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

function createAndSavePerson(done) {
  var ind = new Person({name:"David Davis",age:23,favoriteFoods:["Pizza","Strawberries"]});
  ind.save(function(err, data){
    if(err) {
      console.error(err);
      done(err)
    } else {
      done(null, data)
    };
  });
};
var arrayOfPeople = [{name:"David Davis",age:23,favoriteFoods:["Pizza","Strawberries"]}, {name:"Janice Johnson",age:32,favoriteFoods:["Hamburgers","Ham&Beans"]}, {name: "Alex Alexander",age:56,favoriteFoods:["Spaghetti", "Soup"]}];
const createManyPeople = (arrayOfPeople, done) => {
  
  Person.create( arrayOfPeople, function(err, data){
    if(err) {
      console.error(err);
      done(err)
    } else {
      done(null, data)
    };
  });
};
var personName = "David Davis"
const findPeopleByName = (personName, done) => {
  Person.find( {name: personName}, function(err, data){
    if(err) {
      console.error(err);
      done(err)
    } else {
      done(null, data)
    };
  });
};
var food = "Spaghetti";
const findOneByFood = (food, done) => {
  Person.findOne( {favoriteFoods: food}, function(err, data){
    if(err) {
      console.error(err);
      done(err)
    } else {
      done(null, data)
    };
  });
};

const findPersonById = (personId, done) => {
  Person.findById( personId, function(err, data){
    if(err) {
      console.error(err);
      done(err)
    } else {
      done(null, data)
    };
  });};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err, data){
    if(err) {
      console.error(err);
      done(err)
    } else {
      data.favoriteFoods.push(foodToAdd);
      data.save((err, pers) => {
        if (err) {
          done(err);
        } else {
          done(null, pers);
        };
      });
    };
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;