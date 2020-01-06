// 先取任意有效值
function randomWord(randomFlag, min, max) {
  var str = "",
      range = min,
      arr = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z','a','b','c','d','e',
        '!','@','#','$','%','^','&','*','f','g','h','i',
        'j','k','l','m','n','o','p','q','r','s','t','u',
        'v','w','x','y','z'];
  // 随机产生
  if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
      pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
  }
  return str;
}
//获取hashcode
module.exports =  function gethashcode() {
  //定义一个时间戳，用来获得唯一时间 可以保证hash码是唯一的
  var timestamp = (new Date()).valueOf();
  var myRandom = randomWord(true, 32, 40);
  // var hashcode = hashCode(myRandom + timestamp.toString());
  return myRandom;
}
let test = () => {
  //定义一个时间戳，用来获得唯一时间 可以保证hash码是唯一的
  var timestamp = (new Date()).valueOf();
  var myRandom = randomWord(true, 16, 24);
  var hashcode = myRandom.slice(0,8)+ timestamp + myRandom.slice(-8,0)
  return hashcode;
}
console.log(test())