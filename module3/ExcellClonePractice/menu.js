let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

bold.addEventListener("click", function()
{
    setFonStyle("bold",bold);
})

italic.addEventListener("click", function()
{
    setFonStyle("italic",italic);
})

underline.addEventListener("click", function()
{
    setFonStyle("underline",underline);
})

function setFonStyle(styleName,element)
{
    if (lastSelectedCell) {
        let { rowId, colId } = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if (cellObject.fontStyle[styleName]) {
            if (styleName == "bold") {
                lastSelectedCell.style.fontWeight = 'normal';
            } else if (styleName == "italic") {
                lastSelectedCell.style.fontStyle = 'normal';
            } else {
                lastSelectedCell.style.textDecoration = 'none';
            }
            element.classList.remove('active-menu-option');
        } else {
            if (styleName == "bold") {
                lastSelectedCell.style.fontWeight = 'bold';
            } else if (styleName == "italic") {
                lastSelectedCell.style.fontStyle = 'italic';
            } else {
                lastSelectedCell.style.textDecoration = 'underline';
            }
            element.classList.add('active-menu-option');
        }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
    }
}