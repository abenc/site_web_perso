var Net = require("Net.js")
var fs  = require("fs")
// in case of using parse server ...
/*var Parse = require('parse/node')
Parse.initialize("app")
Parse.serverURL = 'http://localhost:1337/parse'

exports.test_parse = function(req,res){
  console.log("execute test parse lol")
  var TestObject = Parse.Object.extend("TestObject")
  var testObject = new TestObject()
  var MyObject = Parse.Object.extend("MyObject")
  var myObject = new MyObject()
    myObject.save({x :"two",s:"bad"})
    testObject.save({foo: "bar"}).then(function(object) {
  })

  var User
  res.send("YOLO")
}
exports.test_parse = function(req,res){
  var Parse_Network = Parse.Object.extend('Network')
  var myNetwork     = new Parse_Network()
  myNetwork.save(req.body.network)
}*/
/**@function showpopup
@TODO fonction inutile, dans la mesure ou ce qui est interessant c'est la page ejs que j'appelle 'success qui contient une popup que j'ai pu inclure depuis un fichier ejs dans la toolbox_css
@param req,res default
@description render page with popup, you can set
@return
@author abenc
**/

exports.renderAccueil = function(req,res){
    res.render("accueil.ejs")
}
exports.showpopup = function (req,res){
  ///this function can be used for whole project, showing popup, u can configure it and make it useful fat fuck
  res.render('success')
}
exports.bulles = function(req,res){
  res.render('index.ejs')
}
exports.update_tNet = function(req,res){
  console.log(req.method)
  if(req.method=="POST"){
    console.log(req.body.node_name)
        /*node_name = req.body.
        color_node= req.body.
        var user = new Parse.User()
        user.set("username", email)
        user.set("password", password)
        user.set("email", email)
        user.signUp(null, {
          success: function(user) {
            res.render('success')
          },
          error: function(user, error) {
            res.render('fail')
          }
        })*/
    if(req.body.create = "true"){
      treeNet = new Net()
      fs.readFile("x.json", 'utf8', function (err, data) {
                if (err) throw err
                obj = JSON.parse(data)
                  treeNet.readJson(obj)
                  treeNet.displayNet();
                  treeNet.addNode(req.body.node_name)
                  treeNet.addColorNode(req.body.node_name,req.body.node_color)
                  treeNet.displayNet()
      })
    }
    else {
      treeNet.addEdge(req.body.node_name_source,req.body.node_name_target,req.body.weight)
    }
  }
  if(req.method=="GET"){ //
    fs.readFile("x.json",'utf8',function(err,data){
      if (err) throw err
      obj = JSON.parse(data)
      res.render(data,accueil,ejs)
    })
  }
}
/**@function create_user
@param req,res default
@description if POST req -> signup the user|| GET -> render signup page
@return
@author abenc
**/
/*
exports.create_user = function(req,res){
  console.log(req.method)

  if(req.method=="POST"){
    email = req.body.email
    password= req.body.password
    var user = new Parse.User()
    user.set("username", email)
    user.set("password", password)
    user.set("email", email)
    user.signUp(null, {
      success: function(user) {
        res.render('success')
      },
      error: function(user, error) {
        res.render('fail')
      }
    })
  }
  else{
    res.render('create_user')
  }

}
*/
