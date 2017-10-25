var renderBucketList = require('./bucket_list_view.js')
var requestHelper = require('../helpers/request_helper')

var buttonLogic = function () {
  button = document.getElementById('btn-submit')
  drop = document.getElementById('countries-drop')

  button.addEventListener('click', function(){
    console.log("Inside listener")
    var country = JSON.parse(drop.value)
    // renderBucketList(country)
    // renderBucketList(drop.value)
    // console.log(drop.value)
    requestHelper.postRequest('http://localhost:3000/api/countries', function(country) {
      renderBucketList(country)
      console.log(country)
    },
    country)

  })


}



module.exports = buttonLogic
