var product_desc = JSON.parse(localStorage.getItem("Prodct-Data"));
displayproduct()
function displayproduct(){
    product_desc.map(function(el){
        var div1 = document.createElement("div");
        // var div2 = document.createElement("div");
        
        var img = document.createElement("img");    
        img.setAttribute("src",el.img_url);
        img.setAttribute("alt",el.name);
        img.setAttribute("class","product_image");

        var div3 = document.createElement("div");
        div3.setAttribute("id","div3");

        var div4 = document.createElement("div");
        div4.setAttribute("id","div4");

        // var div5 = document.createElement("div");
        // div5.setAttribute("id","div5");


        var img1 = document.createElement("img");    
        img1.setAttribute("src",el.img1);

        var img2 = document.createElement("img");    
        img2.setAttribute("src",el.img2);

        // var img3 = document.createElement("img");    
        // img3.setAttribute("src",el.img3);
        

        var packsize ="30ml";
        // var desc = document.createElement("p");
        // desc.textContent = el.desc;
       
        var name = document.getElementById("tittlem");
        name.textContent = el.name;
        var price = document.getElementById("price");
        price.textContent ='₹'+ el.price;
         // Get a reference to the button element
 const myButton = document.getElementById('60mlbutton');
  
 // Add event listener to the button
 myButton.addEventListener('click', myFunction);
function myFunction() {
    // Add your code here
    // var upprice=price*2;
     packsize="60 ml";
    // localStorage.setItem("packsize", packsizem);
    document.getElementById("price").textContent='₹'+Math.floor(el.price*2)
    document.getElementById("finalprice").textContent =Math.floor(el.finalPrice*1.5);
    console.log('Button clicked!');
  }
  const myButton2 = document.getElementById('125mlbutton');
  
  // Add event listener to the button
  myButton2.addEventListener('click', myFunction2);
 function myFunction2() {
     // Add your code here
     // var upprice=price*2;
      packsize="125 ml";
    // localStorage.setItem("packsize", packsizem);
     document.getElementById("price").textContent='₹'+Math.floor(el.price*3.5)
     document.getElementById("finalprice").textContent =Math.floor(el.finalPrice*2.5);
     console.log('Button clicked!');
   }
   const myButton3 = document.getElementById('30mlbutton');
  
  // Add event listener to the button
  myButton3.addEventListener('click', myFunction3);
 function myFunction3() {
     // Add your code here
     // var upprice=price*2;
      packsize="30 ml";
    // localStorage.setItem("packsize", packsizem);
     document.getElementById("price").textContent='₹'+Math.floor(el.price)
     document.getElementById("finalprice").textContent =Math.floor(el.finalPrice);
     console.log('Button clicked!');
   }
   const myButton4 = document.getElementById('200mlbutton');
  
  // Add event listener to the button
  myButton4.addEventListener('click', myFunction4);
 function myFunction4() {
     // Add your code here
     // var upprice=price*2;
      packsize="200 ml";
    // localStorage.setItem("packsize", packsizem);
     document.getElementById("price").textContent='₹'+Math.floor(el.price*6)
     document.getElementById("finalprice").textContent =Math.floor(el.finalPrice*4);
     console.log('Button clicked!');
   }
        var finalprice = document.getElementById("finalprice");
        finalprice.textContent = el.finalPrice;
        var btn = document.createElement("button");
        btn.textContent = "Add To Cart";
        btn.setAttribute("id","cartbtnpage");
        btn.addEventListener("click",function(){
            if(check(el.name)===false){
                addToCart(el,packsize);
                // localStorage.setItem("packsizem", packsize);
                btn.innerHTML = "Added &#9989;";
                console.log("alredy not added")
            }else{
                btn.innerHTML = "Added &#9989;";
               console.log("alredy added");
               var myDiv = document.getElementById("myDiv");
               myDiv.textContent="Already Added";
               var cloneDiv = myDiv.cloneNode(true);
             
               myDiv.parentNode.replaceChild(cloneDiv, myDiv);
            //    cloneDiv.classList.remove("hide");
            myDiv.classList.toggle("animate");
             
               // Start animation
               cloneDiv.style.animation = "slideAndFade 5s forwards";
             
               setTimeout(function() {
                 cloneDiv.style.visibility = "animate";
               }, 1000);
            //    location.reload();
            }
        })
       
        div1.append(img);

        // div2.append(star1,star2,star3,star4,star5);

        div3.append(img1);
        div4.append(img2);
        // div5.append(img3);

        document.getElementById("pAngle").append(div3,div4);

        // document.getElementById("pAngle").append(img1,img2,img3);

         document.getElementById("rightside").append(btn);

     document.getElementById("mainImage").append(div1);
    //  document.getElementById("mtext").append(desc);
    })
    
}


  
 
  

var cart_data = JSON.parse(localStorage.getItem("cartproducts"))||[];
function addToCart(product){
    cart_data.push(product);
    localStorage.setItem("cartproducts",JSON.stringify(cart_data));

    var myDiv = document.getElementById("myDiv");
    // myDiv.textContent="Already Added";
    var cloneDiv = myDiv.cloneNode(true);
  
    myDiv.parentNode.replaceChild(cloneDiv, myDiv);
 //    cloneDiv.classList.remove("hide");
 myDiv.classList.toggle("animate");
  
    // Start animation
    cloneDiv.style.animation = "slideAndFade 5s forwards";
  
    setTimeout(function() {
      cloneDiv.style.visibility = "animate";
    }, 1000);
    
}
  

function check(name){
    let checkCart = cart_data.filter(function(elem){
        return name === elem.name
    })
    if(checkCart.length>0){
        return true;
    }else{
        return false;
    }
}


// window.onbeforeunload = function() {
//     localStorage.clear();
//     localStorage.clear('Prodct-Data');
//     localStorage.clear('productInfo');
//     localStorage.clear();
//   };

    // var myDiv = document.getElementById("myDiv");
    // myDiv.classList.remove("hide");
    // myDiv.style.animation = "slideAndFade 2s forwards";
    
    // setTimeout(function() {
    //   myDiv.style.visibility = "hidden";
    // //   location.reload();
    // }, 1000);
  



