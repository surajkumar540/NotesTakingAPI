let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelectorAll(".cell");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellsContentDiv.addEventListener("scroll", function(e)
{
    let scrollFromTop = e.target.scrollTop;
    let scrollFromLeft = e.target.scrollLeft;
    topRow.style.top = scrollFromTop+"px";
    leftCol.style.left = scrollFromLeft+"px";
    topLeftCell.style.top = scrollFromTop+"px";
    topLeftCell.style.left = scrollFromLeft+"px";
})

for(let i=0; i<allCells.length; i++)
{
    allCells[i].addEventListener("click",function(e)
    {
        let rowId = Number(e.target.getAttribute("rowid"));
        let colId = Number(e.target.getAttribute("colid"));
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";
        // console.log(address);
        let cellObject = db[rowId][colId];
        addressInput.value = address;
        //update ui
        formulaInput.value = cellObject.formula;
        
        //bold -- using ternary oprator
        cellObject.fontStyle.bold?document.querySelector(".bold").classList.add("active-font-style"):
        document.querySelector(".bold").classList.remove("active-font-style");

        cellObject.fontStyle.italic?document.querySelector(".italic").classList.add("active-font-style"):
        document.querySelector(".italic").classList.remove("active-font-style");
    
        cellObject.fontStyle.underline?document.querySelector(".underline").classList.add("active-font-style"):
        document.querySelector(".underline").classList.remove("active-font-style");

        
    })

    allCells[i].addEventListener("blur",function(e)
    {
        lastSelectedCell = e.target;
        let cellValue = e.target.textContent;
        let {rowId,colId} = getRowIdColIdFromElement(e.target);
        // console.log(returnValue);
        let cellObject = db[rowId][colId];
        if(cellObject.value == cellValue)
        {
            return;
        }
        cellObject.value = cellValue;
        console.log(cellObject);
        updateChildren(cellObject);
        if(cellObject.visited)
        {
            return;
        }
        cellObject.visited = true;
        visitedCells.push({"rowId":rowId,"colId":colId});

    })

    allCells[i].addEventListener("keydown",function(e)
    {
        if(e.key == 'Backspace')
        {
            let cell = e.target;
            let {rowId,colId} = getRowIdColIdFromElement(cell);
            let cellObject = db[rowId][colId];

            if(cellObject.formula)
            {
                //update db
                cell.formula = "";
                //update ui
                formulaInput.value = "";
                cell.textContent = "";
                removeFormula(cellObject);
            }
        }
    })
}

formulaInput.addEventListener("blur",function(e)
{
    let formula = e.target.value;
    if(formula)
    {
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.formula)
        {
            removeFormula(cellObject);
        }
        let computedValue = solveFormula(formula,cellObject); //function
        //update db
        cellObject.value = computedValue;
        cellObject.formula = formula;

        //update ui
        lastSelectedCell.textContent = computedValue;
        updateChildren(cellObject);//call
    }
})











































// let topRow = document.querySelector(".top-row");
// let leftCol = document.querySelector(".left-col");
// let topLeftCell = document.querySelector(".top-left-cell");
// let allCells = document.querySelectorAll(".cell");
// let addressInput = document.querySelector("#address");
// let formulaInput = document.querySelector("#formula");
// let lastSelectedCell;


// //scroll with fixed Alphabet row and Number column using z-index
// cellsContentDiv.addEventListener("scroll",function(e){
//     let scrollFromTop = e.target.scrollTop;
//     let scrollFromLeft = e.target.scrollLeft;

//     topRow.style.top = scrollFromTop+"px";
//     leftCol.style.left = scrollFromLeft+"px";
//     topLeftCell.style.top = scrollFromTop+"px";
//     topLeftCell.style.left = scrollFromLeft+"px";
// })


// for(let i=0; i<allCells.length; i++)
// {
//     // click cells and give the cell name 
//     allCells[i].addEventListener("click",function(e)
//     {
//             let rowId = Number(e.target.getAttribute("rowid"));
//             let colId = Number(e.target.getAttribute("colid"));
//             let address = String.fromCharCode(65+colId)+(rowId+1)+"";
//             // console.log(address);
//             let cellObject = db[rowId][colId];
//             addressInput.value = address;
//             //update ui
//             formulaInput.value = cellObject.formula; 
//     })

//     //save cells s content in object

//     allCells[i].addEventListener("blur",function(e){
//         lastSelectedCell = e.target;
//         let cellValue = e.target.textContent;
//         let {rowId,colId} = getRowIdColIdFromElement(e.target);
//         let cellObject = db[rowId][colId];
//         if(cellObject.value == cellValue){
//             return;
//         }
//         cellObject.value = cellValue;
//         console.log("After UPdate",cellObject);
//         updateChildren(cellObject);
//         if(cellObject.visited){
//             return;
//         }
//         cellObject.visited = true;
//         visitedCells.push({"rowId":rowId,"colId":colId});
//     })
// }

// function getRowIdColIdFromElement(element)
// {
//     let rowId = element.getAttribute("rowid");
//     let colId = element.getAttribute("colid");
//     return{
//         rowId,
//         colId
//     }
// }

// formulaInput.addEventListener("blur")

