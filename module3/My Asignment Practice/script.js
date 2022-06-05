let addBtn = document.querySelector(".addTask");
let inputWrapper = document.querySelector(".input-wrapper");
let inputName = document.querySelector(".input-name>input");
let inputDesc = document.querySelector(".input-desc>input");
let inputSize = document.querySelector(".input-size>input");
let submitBtn = document.querySelector("[type='submit']");
let mainCont = document.querySelector(".main-cont");
let deleteIcon = document.querySelector(".button");
let addBtnFlag = true;

let array = [];

// if(localStorage.getItem("list")){
//     let str = localStorage.getItem("list");
//     let arr = JSON.parse(str);
//     array = arr;
//     for(let i=0; i<arr.length; i++)
//     {
//         let listObj = arr[i];
//         creatList(listObj.name, listObj.disc, listObj.size);
//         updateLocalStorage();
//     }
// }


//toggle plus icon
addBtn.addEventListener("click", function () {
    // console.log("clicked");
    if (addBtnFlag) {
        inputWrapper.style.display = "flex";
    }
    else {
        inputWrapper.style.display = "none";
    }
    addBtnFlag = !addBtnFlag;
})

inputName.addEventListener("keydown", function (e) {
    let key = e.key;

    if (key == "Enter") {
        inputDesc.focus();
    }
})


//Jump to next input box after click enter
inputDesc.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == "Enter") {
        inputSize.focus();
    }
})


//clike submitBtn createlist
submitBtn.addEventListener("click", function () {
    // console.log("clicked");

    let name = inputName.value;
    let disc = inputDesc.value;
    let size = inputSize.value;


    if (name == 0) {
        name = "xyz";
    }
    
    if (disc.length == 0) {
        disc = "--";
    }

    if (size.length == 0) {
        size = "0";
    }
    creatList(name, disc, size); // create functioncall

    inputName.value = "";
    inputDesc.value = "";
    inputSize.value = "";

    inputWrapper.style.display = "none";
    addBtnFlag = !addBtnFlag;
})

//creatList
function creatList(name, disc, size) {
    // console.log("clicked");
    //     <div class="fill-cont">
    //          <div class="name-list">Name</div>
    //          <div class="disc-list">Discription</div>
    //          <div class="size-list">200</div>
    //     </div>
    let listCont = document.createElement("div");
    listCont.setAttribute('class', 'fill-cont');
    listCont.innerHTML = `<div class="namelist">${name}</div>
                               <div class="disclist">${disc}</div>
                               <div class="sizelist">${size}</div>
                               <div class="button">
                                <i class="fa fa-trash" id="delete"></i>
                                </div>`;
    mainCont.appendChild(listCont);
    //     console.log(mainCont);
    let deleteList = listCont.querySelector(".fa-trash");
    deleteList.addEventListener("click",function()
    {
        listCont.remove();
        updateLocalStorage();
    })

    array.push({"name":name, "disc":disc, "size":size});
    updateLocalStorage();
}

function updateLocalStorage()
{
    let stringifyArr = JSON.stringify(array);
    localStorage.setItem("list",stringifyArr);
}




