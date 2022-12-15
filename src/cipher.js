const lisLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
 const cipher = {
  encode: (stepChange, sentence) => {
    if (!stepChange || sentence.lenght === 0) {
      throw new TypeError("Invalid params");
    }
    sentence = sentence.toLowerCase();

    let newText = "";
    
    for (const letter of sentence) {
      if (!lisLetters.includes(letter)) {
        //console.log("lisLetters" , lisLetters);
        continue;
      }
      const indexLetter = lisLetters.findIndex((item) => item === letter);
      let indexNewLetter = indexLetter + stepChange;
        //console.log("indexNewLetter",indexNewLetter )
      if (indexNewLetter >= 26) {
       // indexNewLetter -= 26;
       indexNewLetter = indexNewLetter % 26;
      }
      newText += lisLetters[indexNewLetter];
    }
    return newText.toUpperCase();
  },

  decode: (stepChange, sentence) => {
    if (!stepChange || sentence.lenght === 0) {
      throw new TypeError("Invalid params");
    }
    sentence = sentence.toLowerCase(); 
    
    let newText = "";
    for (const letter of sentence) {
      if (!lisLetters.includes(letter)) {
        //console.log("lisLetters" , lisLetters);
        continue;
      }
      const indexLetter = lisLetters.findIndex((item) => item === letter);
      let indexNewLetter = indexLetter - stepChange;

      if (indexNewLetter < 0) {
        indexNewLetter += 26;
        if(indexNewLetter < 0 ) {
          indexNewLetter += 26
        }
     // indexNewLetter = indexNewLetter % 33;
      
      }
      newText += lisLetters[indexNewLetter];
      //console.log("newText",newText);
    }
    return newText.toUpperCase();
  },
};

//cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG');

export default cipher;
