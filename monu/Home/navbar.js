

// signup javascript functioning
var form=document.querySelector("#form");
form.addEventListener("submit" ,function(){
event.preventDefault();

// var data=JSON.parse(localStorage.getItem("usersignupdata"));
// console.log(signupdata)

var namemonu=document.getElementById("namemonu").value;
var mobmonu=document.getElementById("mobmonu").value;
var passmonu=document.getElementById("passmonu").value;

// console.log(namemonu);
// console.log(mobmonu);
// console.log(passmonu);

localStorage.setItem("namemonu", namemonu);
localStorage.setItem("mobmonu", mobmonu);
localStorage.setItem("passmonu", passmonu);

var myDiv = document.getElementById("createacc");
  myDiv.classList.remove("createacc");
  myDiv.style.animation = "slideAndFade 4s forwards";

  setTimeout(function() {
    myDiv.style.visibility = "hidden";
  }, 4000);

})
var deleteButton = document.getElementById("myBtn5");

deleteButton.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
//   console.log("Local storage cleared!");
});
var myBtn5 = document.getElementById("myBtn5");
    myBtn5.style.display = "none";



// login javascript functioning

var form1=document.querySelector("#form1");
form1.addEventListener("submit" , function(){
  event.preventDefault();


  var namemonu=localStorage.getItem("namemonu");
  var mobmonu=localStorage.getItem("mobmonu");
  var passmonu=localStorage.getItem("passmonu");
 
//   console.log(namemonu);
// console.log(mobmonu);
// console.log(passmonu);
  
var mobm3=document.getElementById("mob3").value;
var passm3=document.getElementById("pass3").value;
//   console.log(data.usermobile);
  if(mobmonu==null)
  {
    // alert("Please Create an Account");
    var myDiv = document.getElementById("myDiv");
    myDiv.textContent="Please Create an Account";
    var cloneDiv = myDiv.cloneNode(true);
  
    myDiv.parentNode.replaceChild(cloneDiv, myDiv);
    cloneDiv.classList.remove("hide");
  
    // Start animation
    cloneDiv.style.animation = "slideAndFade 5s forwards";
  
    setTimeout(function() {
      cloneDiv.style.visibility = "hidden";
    }, 4000);
   
  }else if(mobmonu==mobm3 && passmonu==passm3){
    console.log("Login Success");
    document.getElementById("myBtn").textContent="";
    document.getElementById("myBtn3").textContent="";
    document.getElementById("usernamedata").textContent=namemonu;
    var myBtn5 = document.getElementById("myBtn5");
  myBtn5.style.display = "block";
  myBtn5.textContent ="LogOut";
  var myDim = document.getElementById("logsu");
  myDim.classList.remove("logsu");
  myDim.style.animation = "slideAndFade 4s forwards";

  setTimeout(function() {
    myDim.style.visibility = "hidden";
  }, 4000);

  }else  if(mobmonu!=mobm3 && passmonu!=passm3){
    console.log("Acc Not Foune");
    var myDiacc = document.getElementById("notfound");
  myDiacc.classList.remove("notfound");
  myDiacc.style.animation = "slideAndFade 4s forwards";

  setTimeout(function() {
    myDiacc.style.visibility = "hidden";
  }, 4000);
    // window.location.reload()
  } 
})

// javascript for homepage after login
var logindata=JSON.parse(localStorage.getItem("userlogindata"));
var user=document.querySelector("#forlogsin");
if(logindata!==null)
{
  
}


    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var modal3 = document.getElementById("myModal3");

    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");
    
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close2")[0];
    var span3 = document.getElementsByClassName("close3")[0];
    
    // When the user clicks the button, open the modal 
    if(logindata==null ){
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }
// *******************************************
if(logindata==null){
btn3.onclick = function() {
      modal3.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span3.onclick = function() {
      modal3.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal3) {
        modal3.style.display = "none";
      }
    }
  }



  window.onload = function() {
    var namemonu=localStorage.getItem("namemonu");
    //  console.log(namemonu);
    if(namemonu!=null){
        console.log("Login Success");
        document.getElementById("myBtn").textContent="";
        document.getElementById("myBtn3").textContent="";
        document.getElementById("usernamedata").textContent=namemonu;
        var myBtn5 = document.getElementById("myBtn5");
      myBtn5.style.display = "block";
      myBtn5.textContent ="LogOut";
      }

  };