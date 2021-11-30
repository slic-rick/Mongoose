const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/peopleDB')

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
});



const Fruit = mongoose.model('fruit', fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 8
});

fruit.save();


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [1]
    },
    age: Number,
    fruit: fruitSchema
});

const Person = mongoose.model('People', personSchema);

const person = new Person({
    name: "Erick",
    age: 22,
    fruit: fruit
});

person.save();

const person1 = new Person({
    name: "Sliccy",
    age: 22
});

const person2 = new Person({
    name: "Fr",
    age: 22
});

// Person.insertMany([person1, person2], function (err) {
//     if (err) {
//         console.log("An error occured")
//     } else {
//         console.log("ALL good fam")
//     }
// });

// Person.find(function (err, persons) {
//     console.log("In the find method")
//     if (err) {
//         console.log(err)
//     } else {
//         persons.forEach(function (person) {
//             var name = person.name;
//             console.log(name)
//         });

//         mongoose.connection.close();

//     }
// });

Person.updateOne({
    name: "Fr"
}, {
    name: "Unitim"
}, function (err) {

    if (err) {
        console.log(err);
    } else {
        console.log("Document updated")
    }

});

Person.deleteOne({
    name: "Sliccy"
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Document deleted!");
    }
});

// person.save();