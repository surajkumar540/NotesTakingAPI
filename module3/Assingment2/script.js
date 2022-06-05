let btns = document.querySelectorAll(".btnDiv button");
let addBtn = btns[0];
let deleteBtn = btns[1];
let sortBtn = btns[2];
let isDeleteClicked = false;
let isSortClicked = false;

(async function(){
    let res = await axios.get('/getAll');
    let data = res.data;
    for(let i=0;i<data.length;i++){
        let name = data[i].name;
        let description = data[i].description;
        let size = data[i].size;
        let id = data[i].id
        addModal(name,description,size,id);
    }
})();

addBtn.addEventListener("click",async function(){
    let inputs = document.querySelectorAll("input");
    let name = inputs[0].value;
    let description = inputs[1].value;
    let size = inputs[2].value;
    if(name.length == 0 || description.length == 0 || size.length ==0){
        alert("Please Enter something!!!");
        return
    }
    let res = await axios.post('/details',{"name":name,"description":description,"size":size});
    let id = res.data;
    addModal(name,description,size,id);
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    
})

deleteBtn.addEventListener("click",function(){
    if(isDeleteClicked){
        deleteBtn.classList.remove("active");
    }else{
        deleteBtn.classList.add("active");
    }
    isDeleteClicked = !isDeleteClicked;
})

sortBtn.addEventListener("click",async function(){
    let container = document.querySelector(".container");
    container.innerHTML = "";
    let res = await axios.get('/getAll');
    let data = res.data;
    if(!isSortClicked){
        data.sort((a,b)=> Number(a.size.split(" ")[0]-Number(b.size.split(" ")[0])))
    }
    else{
        data.sort((a,b)=> Number(b.size.split(" ")[0]-Number(a.size.split(" ")[0])))
    }
    for(let i=0;i<data.length;i++){
        let name = data[i].name;
        let description = data[i].description;
        let size = data[i].size;
        let id = data[i].id
        addModal(name,description,size,id);
    }
    isSortClicked = !isSortClicked
})

function addModal(name,description,size,id){
    let div = document.createElement("div");
    div.classList.add("detail");
    div.innerHTML = ` <div class="name"><b>Name:-</b> ${name}, <b>  Size:- </b> ${size}</div>
    <div class="descrtiption"><b>Description</b> ${description}.</div>`
    let container = document.querySelector(".container");
    div.addEventListener("click",async function(){
        if(isDeleteClicked){
            div.remove();
             await axios.post('/delete',{recordId:id})
        }
        return;
    })
    container.appendChild(div);
}