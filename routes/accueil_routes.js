var accueil = require('../handlers/accueil_handler.js')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: true })





module.exports = function(app){
  app.get('/accueil',function(req,res){
    res.render('index')
  })
  .get('/',accueil.renderAccueil)
  .get('/bulles',urlencodedParser,accueil.bulles)
  .post('/update_tNet',urlencodedParser,accueil.update_tNet)
  //.get('/create_user',urlencodedParser,accueil.create_user)
  //.post('/create_user',urlencodedParser,accueil.create_user)
  //.get('/popup',accueil.showpopup)
}
