function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result: number = n1 + n2;
  if(showResult) {
    console.log(phrase + n1 + n2);
  } else {
    return result;
  }
}

const num1 = 5; // const & type inference when initialized, hence no need for type notation.
let num2 = 2.8; // type inference when initialized, hence no need for type notation.
let temp: string; // no initial value & 'let' variable, hence desirable to write type.
const printResult = true;
const resultPhrase = "Result is ";

add(num1, num2, printResult, resultPhrase);