// //Definition a Function
// function your_func() {
//   //code to be execute
// }

// //Call a Function
// your_func();

// var add = (params1, params2);

var add = function (value1, value2) {
  return value1 + value2;
  //   console.log(value1 * value2);
};

// 40
console.log(add);
var result2 = add(20, 20);
document.write(result2 + "<br>");

// // 30
// var result = sum(10, 20);
// document.write(result + "<br>");

//Definition
function greeting(name, email, address) {
  document.write(
    "Name : " +
      arguments[0] +
      "<br>" +
      "Email : " +
      arguments[1] +
      "<br>" +
      "Address: " +
      address
  );
}

function sendData(name, email, address) {
  function proses() {
    document.write(
      "Name : " +
        name +
        "<br>" +
        "Email : " +
        email +
        "<br>" +
        "Address: " +
        address
    );
  }

  return proses();
}

//Nama : Adi
//Email : adi@gmail
//address : lalala

// call Function
greeting("Adi", "adi@gmail.com", "Tanggerang Selatan");
document.write("<br><br>");
sendData("Adi", "adi@gmail.com", "Tanggerang Selatan");

const form = document.querySelector("#form");
const dataName = document.querySelector("#data-name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.elements["name"].value;

  dataName.innerHTML = name;
});
