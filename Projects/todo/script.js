let inputName = document.getElementById("name");
let inputDisc = document.getElementById("disc");
let inputSize = document.getElementById("size");
let ulTag = document.querySelector("ul");
let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click",function()
{
        // console.log("clicked"); 67
        let value1 = nameTag.value;
        // let value2 = disc.value;
        // let value3 = size.value;
        // if(value1.length == 0 )
        // {
        //     return;
        // }
        nameTag.value = "";
        // disc.value = "";
        // size.value = "";
        let liTag = document.createElement("li");
        liTag.innerHTML = `<div class="delete">${value1}<li class="fa fa-trash">
                            </li></div>`
                            // <div class="delete">${value2}<li class="fa fa-trash">
                            // </li></div>
                            // <div class="delete">${value3}<li class="fa fa-trash">
                            // </li></div>`
        
        // appendLiTag in ulTAg
        ulTag.appendChild(liTag);
        removeFun(liTag);
})

function removeFun(liTag)
{
    let deleteDiv = liTag.querySelector(".fa-trash");
    deleteDiv.addEventListener("click", function()
    {
        liTag.remove();
    })
}