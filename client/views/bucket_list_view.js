var renderBucketList = function (country){
  var bucketList = document.getElementById('bucket-list')
  li = document.createElement('li')
  li.innerText = country.name
  bucketList.appendChild(li)
}


module.exports = renderBucketList
