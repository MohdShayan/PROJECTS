let inputElement = document.querySelector("#qrtext");
let qrimage = document.querySelector("#qr-image");
let link = document.querySelector("#link");
let imgBox = document.querySelector("#imgBox");

function generateQR() {
  if (inputElement.value.length) {
    let mylink = (qrimage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputElement.value);
    link.href = mylink;
    imgBox.classList.add("show-img");
    inputElement.value = "";
  } else {
    inputElement.classList.add("inperr");
    inputElement.placeholder = "THIS FIELD CANNOT BE BLANK !";
    setTimeout(() => {
      inputElement.classList.remove("inperr");
      inputElement.placeholder = "Enter Text or URL";
    }, 1000);
  }
}
