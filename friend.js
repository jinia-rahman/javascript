function findLongestWord(friends){
  let name =friends[0];
for(const elements of friends){
 // let nameLength =elements.length;
  if(nameLength>name.length){
    name= elements;
  }
}
return name;
}
const friends = ['jinia','anu','sharmin','rimi','mily'];
console.log(findLongestWord('friends'));