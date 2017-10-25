var requestHelper = require('./helpers/request_helper.js')
var renderList = require('./views/list_view.js')
var buttonLogic = require('./views/button_view.js')
var requestHelper = require('./helpers/request_helper.js')

var initialize = function (){
  var url = "https://restcountries.eu/rest/v2/all"
  buttonLogic()
  // makeRequest(url)
  requestHelper.getRequest(url, function(countries){
    renderList(countries)
  })
}

// var makeRequest = function( url ) {
//   var request = new XMLHttpRequest()
//   request.open( "GET" , url )
//   request.addEventListener( "load", function(){
//     var countries = JSON.parse( this.responseText ) || []
//     renderList(countries)
//     console.log(countries)
//   })
//   request.send()
// }
//



window.addEventListener("DOMContentLoaded", initialize)
