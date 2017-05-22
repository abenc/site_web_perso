var bodyParser = require('body-parser')
var express = require("express")
var fs = require("fs")
var Net = require("Net.js")
//var Parse = require("parse");
var app = express();
require('./routes/accueil_routes.js')(app)
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,function(){
  console.log("Listening on 3000")
});

treeNet = new Net()

nodenames= {
  "School":"",
  "Skills":"",
  "Projects":"",
  "Tips":""
}



/*
readJson
addNode
addColorNode
addEdge
getNodeIndex
displayNet
writeNet
*/

/*for (var key in nodenames)
     treeNet.addNode(key)
treeNet.
*/
//treeNet.displayNet()
//treeNet.writeNet()


/*
*/
//treetNet = new Net.netwrok();
/*treeNet.addColorNode("kikou","red")
treeNet.addNode("hiho")
treeNet.addEdge("hiho","yolo",10)*/

/*

*/
//Net.displayNet()
