let imgBox = document.getElementById("imgBox");
let qrLink = document.getElementById("qrLink");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.querySelector("button");

function generateQR() {
  if (qrText.value.length > 0) {
    let url = qrText.value;
    // Check if the URL doesn't start with http:// or https://
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      // Prepend http:// to the URL
      url = "http://" + url;
    }
    qrLink.href = url; // Update the href attribute with the corrected URL
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(url); // Make sure to encode the URL
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

btn.addEventListener("click", generateQR);
