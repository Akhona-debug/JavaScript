function commonChar(str1, str2){

    if(strb.length < str1.length){
        temp = str1;
        str1 = str2
        str2 = temp;
    }

    for (var i = 0, len = str1.length; i < len; i++) {
      if(str2.indexOf(str1[i]) != -1)
          return true;
    }
    return false
}
console.log(commonChar(""));