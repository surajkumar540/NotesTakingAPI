let addSheetBtn = document.querySelector(".add-sheet");
let sheetList = document.querySelector(".sheets-list")
let firstSheet = document.querySelector(".sheet");
let sheetId = 0;
sheetListener(firstSheet);

addSheetBtn.addEventListener("click",function()
{
    //make--->
    // div        class  highlight sheet  attribute
    // <div class="sheet active-sheet">    Sheet 2</div>
    
    sheetId++;//1
    let activeSheet = document.querySelector(".active-sheet");
    activeSheet.classList.remove("active-sheet");
    let sheetDiv = document.createElement("div");
    sheetDiv.classList.add("sheet");
    sheetDiv.classList.add("active-sheet");
    sheetDiv.setAttribute("sheetId",sheetId);
                            //sheet1
    sheetDiv.innerText = `Sheet ${sheetId+1}`;
    sheetList.append(sheetDiv);
    sheetListener(sheetDiv); // sheet banegi tabhi callkarege
    initUi(); //call
    initDb();//call
})

function sheetListener(sheet){
    sheet.addEventListener("click",function()
    {
        //jis sheet par click kiya hai agar vo wahi sheet haito return ho jao
        if(sheet.classList.contains("active-sheet"))
        {
            return;
        }
        initUi();
        //kis par pehele active sheet lagi hui hai
        let activeSheet = document.querySelector(".active-sheet");
        activeSheet.classList.remove("active-sheet");
        sheet.classList.add("active-sheet");
        //shhet attribute nikalo
        let sheetId = sheet.getAttribute("sheetId");
        db = sheetsDB[sheetId].db; //is sheet ka data kya hai
        visitedCells = sheetsDB[sheetId].visitedCells;
        setUi(); //call
    })
}

//2600 cell par jata hai 
function setUi()
{
    for(let i=0; i<visitedCells.length; i++)
    {
        let {rowId,colId} = visitedCells[i];
        let cellObject = db[rowId][colId]; //db se value set
        let cell = document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`); 
        cell.innerHTML = cellObject.value;
    }
}

function initUi()
{
    for(let i=0; i<100; i++)
    {
        for(let j=0; j<26; j++)
        {
            let cell = document.querySelector(`div[rowid="${i}"][colid="${j}"]`);
            cell.innerHTML = "";
        }
    }
}




















































// let addSheetBtn = document.querySelector(".add-sheet");
// let sheetList = document.querySelector(".sheets-list")
// let sheetId = 0;
// let firstSheet = document.querySelector(".sheet");
// sheetListener(firstSheet);


// addSheetBtn.addEventListener("click",function(){
//     sheetId++;
//     let activeSheet = document.querySelector(".active-sheet");
//     activeSheet.classList.remove("active-sheet");
//     let sheetDiv = document.createElement("div");
//     sheetDiv.classList.add("sheet");
//     sheetDiv.classList.add("active-sheet");
//     sheetDiv.setAttribute("sheetId",sheetId);
//     sheetDiv.innerText = `Sheet ${sheetId+1}`;
//     sheetList.append(sheetDiv);
//     sheetListener(sheetDiv); // kyoki jab banegi sheet tab call kar dege
//     initUi();
//     initDb();
// })

// //agar usi sheet par click kar rhe hai jis par hai to waha se return kar do
// function sheetListener(sheet){
//     sheet.addEventListener("click",function(){
//         if(sheet.classList.contains("active-sheet")){
//             return;
//         }

//         //jis par active-sheet class lagi use remove kar do
//         let activeSheet = document.querySelector(".active-sheet");
//         activeSheet.classList.remove("active-sheet");
//         // initUi(); no need to init
//         //jis par click kiya hai us par active sheet laga do
//         sheet.classList.add("active-sheet");
//         //    console.log("hello");
//         let sheetId = sheet.getAttribute("sheetId"); //jis sheet par clicj kiya hai usko sheetid de rakhi hai to us attribute ko nikal lo
//         db = sheetsDB[sheetId].db; //mere pass bhaut saari sheet ka db pada hai but hume us sheet ka db chiye jis par humne kiya hai  
//         visitedCells = sheetsDB[sheetId].visitedCells;
//         setUi();//call
//     })
// }
//  //yai ui par data set kar dega pura
// function setUi()
// {
//     //har ek cell par jao or slect karo
//     for(let i=0; i<visitedCells.length; i++){
//             //db se value set karta hai
//             let {rowId,colId} = visitedCells[i];
//             let cellObject = db[rowId][colId];
//             let cell = document.querySelector(`div[rowid="${rowId}"][colid="${colId}"]`);
//             cell.innerHTML = cellObject.value;
//     }
// }


// //sheet par click karne par mei cell ka content empty ho jaye
// function initUi(){
//     for(let i=0;i<100;i++){
//         for(let j=0;j<26;j++){
//             let cell = document.querySelector(`div[rowid="${i}"][colid="${j}"]`);
//             cell.innerHTML = "";
//         }
//     }
// }