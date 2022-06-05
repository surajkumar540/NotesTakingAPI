let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let addFlag = false;

//toggle modal
addBtn.addEventListener("click", (e)=>
{
    addFlag = !addFlag;
    if(addFlag)
    {
        modalCont.style.display = "flex";
    }
    else
    {
        modalCont.style.display = "none";
    }
})

modalCont.addEventListener("keydown", (e)=>
{
    let key = e.key;
    if(key == "Enter")
    {
        createTicket();
        modalCont.style.display="none";
        textareaCont.value = "";
        addFlag = !addFlag;
    }
})

// ticket create
function createTicket()
{
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
                            <div class="ticket-color">red</div>
                            <div class="ticket-id">#56727</div>
                            <div class="task-area"></div>`

    mainCont.appendChild(ticketCont);
}