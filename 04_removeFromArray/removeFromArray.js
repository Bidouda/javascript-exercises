const removeFromArray = function(list, ...listItems) {
  for(const listItem of listItems){
    while(list.includes(listItem)){
      let position = list.indexOf(listItem);
      list.splice(position, 1);
    }
  }
  return list;
}; 

// Do not edit below this line
module.exports = removeFromArray;
