const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
    admin:   {
        type: Boolean,
        default: false
    }
});

var Users = module.exports = mongoose.model('User', UserSchema);
module.exports = Users;
