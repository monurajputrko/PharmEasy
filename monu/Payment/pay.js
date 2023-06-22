function generateOTP() {
    var digits = '0123456789';
    var otp = '';
  
    for (var i = 0; i < 4; i++) {
      otp += digits[Math.floor(Math.random() * digits.length)];
    }
  
    return otp;
  }
  
 // Example usage
  var otpforpay = generateOTP();
  var otptext=document.getElementById("otptext").textContent=otpforpay;

  var enterotp=document.getElementById("enterotp").value;

  var hideButton = document.getElementById("hideButton");
  
  var warningMessage = document.getElementById('warningMessage');

 
 
    hideButton.addEventListener("click", function(event) {
        var enterotp=document.getElementById("enterotp").value;
        console.log(otpforpay+" "+enterotp);
        if(enterotp==otpforpay){
          // warningMessage.textContent = '';
          var myDive = document.getElementById("psuccess");
            event.stopPropagation();
            myDiv.classList.remove("visible");
            myDive.classList.toggle("visible");
            setTimeout(function() {
             // event.stopPropagation();
              console.log("start")
            myDive.classList.remove("visible");
            }, 4000);
            setTimeout(function() {
              window.location.href="../Payment/paysuccess.html";
             }, 4000);
        } 
        if(enterotp!=otpforpay){
          var imageElement = document.getElementById("imageElement");
          imageElement.src = "../Home/images/otp1.png";
          setTimeout(function() {
            var imageElement = document.getElementById("imageElement");
            imageElement.src = "";
          }, 1000);
       }
     });
    

window.onload = function() {
    var toggleButton = document.getElementById("toggleButton");
    var myDiv = document.getElementById("myDiv");

    toggleButton.addEventListener("click", function() {
      myDiv.classList.toggle("visible");
    });
    
  };
  

    // var toggl = document.getElementById("hideButton");
    // var myDive = document.getElementById("psuccess");

    // toggl.addEventListener("click", function() {
     
    // });
  
    


  

// var upipaypop =document.getElementById("upipaypop");

// upipaypop.addEventListener("click",function(){
   
//   });

// var elements = document.getElementsByClassName("linkwallet");

// var myFunction = function() {
//     console.log("Clicked");
//     var myDiv = document.getElementById("otppopup");
//     var reloadButton = document.getElementById("reloadButton");

//     myDiv.classList.add("fade-in");
  
//     reloadButton.addEventListener("click", function() {
//       window.location.reload();
//     });
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction);
// }




var cartAmount=JSON.parse(localStorage.getItem("totalamt"));
document.querySelector("#cartPrice").innerText=cartAmount;

var stike=JSON.parse(localStorage.getItem("strikedtotal"));
document.querySelector("#strike").innerText=stike;
document.querySelector("#strike").style.marginRight="10px"

var totalBill=JSON.parse(localStorage.getItem("totalBill"));
document.querySelector("#totalbillpaid").innerText=totalBill;


