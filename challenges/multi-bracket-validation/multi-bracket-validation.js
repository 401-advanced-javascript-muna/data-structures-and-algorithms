
class MultiBracket {
  constructor(str){
    this.str = str;
  }

  multiBracketValidation(str){

    let braketCount = 0;
    let spiltStr = str.split('');
    spiltStr.forEach(char => {
      if(char === '(' || char === ')'){braketCount++;}
      else if(char === '{' || char === '}'){braketCount++;}
      else if(char === '[' || char === ']'){braketCount++; }
    });
    if(braketCount % 2 === 0){return true;}
    else {return false;}
  }
}

module.exports = MultiBracket ;
