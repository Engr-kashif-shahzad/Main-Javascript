
//  function checkAddress(fieldId){
//     if(document.getElementById(fieldId) .value ===""){
// alert("kashi@gmail.com.");
//     }
// }

 // Or

// function checkAddress(fieldId) {
//      var val = document.getElementById(fieldId).value;
//      if( val === "") {
//      alert("Email address required.");
//      }
//     }


function fillCity() {
    let zipCode = document.getElementById("zip").value
    console.log("zip code", zipCode)
    if (zipCode == 38000) {
        document.getElementById("city").value = "Faisalabad"
    } else if (zipCode == 39000) {
        document.getElementById("city").value = "Lahore"
    } else {
        document.getElementById("city").value = "Invalid Zip Code!!"
    }
}