function telephoneCheck(str) {
    var str2 = str.split("");
    console.log(str2)
    var numCheck = 0;
    var validNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < str2.length; i++) {
      for (let j = 0; j < validNum.length; j++) {
        if (str2[i] == validNum[j]) {
        numCheck++ ;
      }
    }
  }
      console.log(numCheck)
      if (numCheck === 10 && str2.length === 10) {
        return true;
      } else if (numCheck === 10 && str2.length === 12) {
        if (str2[3] === "-" && str2[7] === "-") {
          return true;
        } else {
          return false;
        }
      } else if (numCheck === 10 && str2.length === 13) {
        if (str2[0] === "(" && str2[4] === ")" && str2[8] === "-") {
          return true;
        } else {
          return false;
        }
      } else if (numCheck === 11 && str2.length === 14) {
        if (str2[0] === "1" && str2[1] === " " && str2[5] === "-"  && str2[9] === "-") {
          return true;
        } else if (str2[0] === "1" && str2[1] === "(" && str2[5] === ")" && str2[9] === "-") {
          return true;
        } else if (str2[0] === "1" && str2[1] === " " && str2[5] === " " && str2[9] === " ") {
          return true;
        } else {
          return false;
        }
      } else if (numCheck === 11 && str2.length === 16) {
        if (str2[0] === "1" && str2[1] === " " & str2[2] === "(" && str2[6] === ")" && str2[7] === " " && str2[11] === "-") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    
      
  
    };
    
    
  
  telephoneCheck("1 555-555-5555");