var prodData=JSON.parse(localStorage.getItem("prodData"));

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector(".search-input input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink="../productvinay/aftersearchpage.html";


// if user press any key and release
inputBox.onkeyup = function(e){
    let userData = e.target.value; //user enetered product name
    let emptyArray = [];
    if(userData){
        icon.onclick = function(){
            linkTag.setAttribute("href",webLink);
            linkTag.click();
        }
        emptyArray = prodData.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data.name +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "../productvinay/aftersearchpage.html";
        var out= prodData.filter(function(el,i){
            return el.name==selectData
        })
        console.log(out)
        localStorage.setItem("searchedItem",JSON.stringify(out[0]))
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}