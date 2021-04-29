function vowels(str){
    var vowels=["a","e","i","o","u"];
    let count=0;
    for(let letter of str.toLower()){
      if(vowels.includes(letter)){
        count++
      }
    }
    return count;
  }