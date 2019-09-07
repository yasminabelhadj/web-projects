const mongoose = require('mongoose')
const Dishes= require('./models/dishes.js')

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    /*var newDish = Dishes({
        name: 'Uthappizza',
        description: 'test'
    });*/

    //newDish.save()
    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
        .then((dish) => {
            console.log(dish);

            return Dishes.findByIdAndUpdate(dish._id,{$set: {description :"hellooo"}},
            /*this one is for showing the dish updated in the next step */
            {new : true}).exec()
        })
        .then((dish) => {
            console.log(dish);

            dish.comments.push({
                rating: 3.6,
                comment:'I/M getting a sinking feeling',
                author :'Léonardo di Caprio'
            });
            return dish.save();})
            .then((dish)=>{
                console.log(dish);

                return Dishes.remove({});

            })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});