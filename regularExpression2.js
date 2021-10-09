// Metacharacters:-

//    \ | ( ) [ { ^ $ * + ? .

let str = "this is improve file for improve project color exampl?e 24";

reg = /^this/; // start;
reg = /project$/; // end;
reg = /f.le/; // singe char match any
reg = /f*le/; // match single or more character
reg = /colou?r/; // u optional
reg = /exampl\?e/; // u optional
reg = /\wrove/; //word match
reg = /\w+rove/; // more word match improve
reg = /\w+file/; // start  _. alphabet number
reg = /\s+for/; // for space match
reg = /\S+for/; // for not space match
reg = /\d/; // for digit check
reg = /\D/; // for non digit check

if (reg.test(str)) {
  let finalResponse = reg.exec(str);
  console.log(finalResponse);
} else {
  console.log("not match");
}

// Quantifiers
//  *  +  ?
