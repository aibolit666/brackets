module.exports = function check(str, bracketsConfig) {
  let count = str.length
  for (let j=0;j<count;j++) {
    if (str.length > 1) {
      for (let i=0; i-1 < str.length; i++) {
        for (let brackets of bracketsConfig) { 
          if (str[i] == brackets[0]) {        
              if (str[i+1] == brackets[1]) {   
                str = str.substring(0,i) + str.substring(i+2)
              }
            }
          }
        }
      } 
    }
  if (str == '') {
    return true
  } else {
    return false
  }
}