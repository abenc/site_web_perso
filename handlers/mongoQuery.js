var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mysiteweb');

//var Network = mongoose.model('Network', { name: String });
//var network = new Network({ name: 'Zildjian' }); // model to export

var saveObject = function(obj){
  obj.save(function (err) {
    if (err) { console.log(err)} else {console.log('meow')}
  })
}
