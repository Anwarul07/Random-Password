console.log(" Random Password ");
const pass = document.getElementById("pass");
const lenght = 12;
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@$&";
const allchar = upper + lower + number + symbol;

function createpassword() {
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (lenght > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];

    }
    pass.value = password;
}

function copy(params) {
    pass.select();
    document.execCommand("copy");

}