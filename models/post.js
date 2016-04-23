var monogoose = require('monogoose');
var Schema = monogoose.Schema;

var PostSchema = new Schema({
  title: String,
  content: String,
  img: String,
});

module.exports = mongoose.model('Post', PostSchema);