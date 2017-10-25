var renderList = function (countries) {
  var drop = document.getElementById('countries-drop')

  countries.forEach(function(country, index){
    var option = document.createElement('option')
    option.innerText = country.name
    // console.log(country)
    option.value = JSON.stringify(country)

    drop.appendChild(option)
  })

}

module.exports = renderList



///ask questions about why i stringify here and why i cant parse this and then have the value just be the
//country object 
