let form = document.querySelector("form")
let select = document.querySelector("select")
let input = document.querySelector("input")
let img  = document.querySelector("img")
let button = document.querySelector("#download")

const getQr = async (e) =>{
    e.preventDefault();
    const get = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`
    );
    img.setAttribute("src",get.url)
  
}
form.addEventListener("submit", getQr);


const downloaQr = async () => {
    const response = await fetch(img.src)
    const blob = await response.blob();
    const downloadLink = document.createElement("a")
    downloadLink.href = URL.createObjectURL(blob)
    downloadLink.download = "get.jpg"
    downloadLink.click()

}
button.addEventListener("click", downloaQr)