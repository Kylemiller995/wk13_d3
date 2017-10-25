var countriesQueryHelper = require('../db/countries_query_helper.js')
var express = require('express')
var countriesRouter= express.Router()



countriesRouter.get('/', function (req, res) {
  console.log("get route hit");
  countriesQueryHelper.all(function (countries){
    res.json(countries)
  })
})

countriesRouter.post('/', function(req, res) {
  var country = req.body
  countriesQueryHelper.save(country, function (updatedCountries){
    res.json(updatedCountries)
  })
})


module.exports = countriesRouter
