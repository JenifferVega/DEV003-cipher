import cipher from './cipher.js';
console.log("cipher", cipher);

const characterAmountNumber = document.getElementById("characterAmountNumber");
const characterAmountRange = document.getElementById("characterAmountRange");

const includeUppercaseElement = document.getElementById("includeUppercase");

const includeNumbersElement = document.getElementById("includeNumbers");

const includeSymbolsElement = document.getElementById("includeSymbols");

const form = document.getElementById("passwordGeneratorForm");

const passwordDisplay = document.getElementById("passwordDisplay");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }

  return array;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const CharacterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const password = generatePassword(
    CharacterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  // console.log("password", password);
  passwordDisplay.value = password;
});

characterAmountRange.addEventListener("input", syncCharacterAmount);
characterAmountNumber.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountRange.value = value;
  characterAmountNumber.value = value;
}

function generatePassword(
  CharacterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  // console.log("CharacterAmount", CharacterAmount);
  // console.log("includeUppercase", includeUppercase);
  // console.log("includeNumbers", includeNumbers);
  //console.log("includeSymbols", includeSymbols);

  let charCodes = LOWERCASE_CHAR_CODES;

  if (includeUppercase) {
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  }
  if (includeNumbers) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  }
  // console.log("charCodes", charCodes);
  const passwordCharacters = [];

  for (let i = 0; i < CharacterAmount; i++) {
    const index = Math.floor(Math.random() * charCodes.length);
    // console.log("index", index);
    const characterCode = charCodes[index];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  //console.log("passwordCharacters", passwordCharacters)
  return passwordCharacters.join("");
}

///////////////////////////cypher and decypher code///////////////////////////

const encode = document.getElementById("encode");
const decode = document.getElementById("decode");

const characterRange = document.getElementById("characterRange");

encode.addEventListener("click", () => {
    
  const textarea = document.getElementById("message");
  const MessageValue = Number(characterRange.value);

  textarea.value = cipher.encode(MessageValue, textarea.value )
  //console.log("textarea.value", textarea.value);
});

decode.addEventListener("click", () => {
  const textarea = document.getElementById("message");
  const MessageValue = Number(characterRange.value);

  textarea.value = cipher.decode(MessageValue,textarea.value)
  //console.log("textarea.value", textarea.value);
});
