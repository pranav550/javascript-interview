//Brackets:-
//   {}
//   []

let str =
  "this is apiapi cool improve file for improve project color exampl?e 24";

reg = /imp[tyr]ove/; // match any one char t y r;
reg = /imp[a-z]ove/; // match any one char a to z;
reg = /imp[a-zA-Z]ove/; // match any one char a to z;
reg = /imp[^rxz]ove/; // ^ not;

reg = /co{2}l/; // match 2 oo
reg = /co{0,2}l/; // match 0,1,2 o
reg = /(code|co|api){2}/; // match 0,1,2 o

if (reg.test(str)) {
  let finalResponse = reg.exec(str);
  console.log(finalResponse);
} else {
  console.log("not match");
}
