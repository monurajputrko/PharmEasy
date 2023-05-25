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

        var div5 = document.createElement("div");
        div5.setAttribute("id","div5");


        var img1 = document.createElement("img");    
        img1.setAttribute("src",el.img1);

        var img2 = document.createElement("img");    
        img2.setAttribute("src",el.img2);

        var img3 = document.createElement("img");    
        img3.setAttribute("src",el.img3);
        

        // var desc = document.createElement("p");
        // desc.textContent = el.desc;
       
        var name = document.getElementById("tittlem");
        name.textContent = el.name;
        var price = document.getElementById("price");
        price.textContent ='₹'+ el.price;
        var finalprice = document.getElementById("finalprice");
        finalprice.textContent = el.finalPrice;
        var btn = document.createElement("button");
        btn.textContent = "Add To Cart";
        btn.setAttribute("id","cartbtnpage");
        btn.addEventListener("click",function(){
            addToCart(el);
            btn.innerText = "Product Added";
        })
        // var star1=document.createElement("img");
        // star1.setAttribute("id", "star");
        // star1.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");
        
        // var star2=document.createElement("img");
        // star2.setAttribute("id", "star");
        // star2.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        // var star3=document.createElement("img");
        // star3.setAttribute("id", "star");
        // star3.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        // var star4=document.createElement("img");
        // star4.setAttribute("id", "star");
        // star4.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

        // var star5=document.createElement("img");
        // star5.setAttribute("id", "star");
        // star5.setAttribute("src", "https://cdn.iconscout.com/icon/premium/png-512-thumb/stars-2521068-2114319.png?f=avif&w=256");

       
        div1.append(img);

        // div2.append(star1,star2,star3,star4,star5);

        div3.append(img1);
        div4.append(img2);
        div5.append(img3);

        document.getElementById("pAngle").append(div3,div4,div5);

        // document.getElementById("pAngle").append(img1,img2,img3);

         document.getElementById("rightside").append(btn);

     document.getElementById("mainImage").append(div1);
    //  document.getElementById("mtext").append(desc);
    })
    
}

// function changefun(product){
//     var selected = document.getElementById("size_select").value;
//     product["selected"] = selected;
//     console.log(selected);
// }


var cart_data = JSON.parse(localStorage.getItem("cartProduct"))||[];
function addToCart(product){
    cart_data.push(product);
    localStorage.setItem("cartProduct",JSON.stringify(cart_data));
}



