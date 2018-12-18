var children = [{num: 6, name: 'me', phone: 7}, {num: 8, name: 'him', phone: 9}];

function addHeaders(table, keys) {
  var row = table.insertRow();
  for( var i = 0; i < keys.length; i++ ) {
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(keys[i]));
  }
}

var table = document.createElement('table');
for( var i = 0; i < children.length; i++ ) {

  var child = children[i];
  if(i === 0 ) {
    addHeaders(table, Object.keys(child));
  }
  var row = table.insertRow();
  Object.keys(child).forEach(function(k) {
    console.log(k);
    var cell = row.insertCell();
    cell.appendChild(document.createTextNode(child[k]));
  })
}

document.getElementById('container').appendChild(table);
