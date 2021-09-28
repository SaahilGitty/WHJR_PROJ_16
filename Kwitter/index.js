
const name_input = document.getElementById("name");

function logIN() {
    localStorage.setItem("User Name", name_input.value);
    window.location = "kwitter.html";
}