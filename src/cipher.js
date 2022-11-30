/*const generatePass = (base, lenght) => {
  let password = "";
  for (let x = 0; x < lenght; x++) {
    let random = Math.floor(Math.random() * base.lenght);
    password += base.charAt(random);
  }
  return password;
};
*/

function cipher () {
  let lenght = parseInt(inputLenght.value);
  let alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";

  const symbols = "!#$%&/()=?¡*¨[]_:;+-_~^^><*";
  const numbers = "123456789";
  if(checkbox2.checked) base+=numbers;
  if(checkbox3.checked) base+=symbols;

  password.innerText = "AAA" ;/*generatePass(base, lenght);*/

};

  window.addEventListener("DOMContentLoaded", () =>{
    GeneratePassword.addEventListener("click", () => {
        cipher();
    });

  });


//export default cipher;
