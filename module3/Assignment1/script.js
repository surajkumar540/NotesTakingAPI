window.addEventListener('scroll', function () {
    let navbar = document.getElementById("menu-bar");
    if (window.pageYOffset >= 256) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}); 


function add() {
    var ul1 = document.getElementById("name-list");
    var ul2 = document.getElementById("desc-list");
    var ul3 = document.getElementById("size-list");


    ul1.classList.add('value1');
    ul2.classList.add('value1');
    ul3.classList.add('value1');

    var name = document.getElementById("name");
    var desc = document.getElementById("desc");
    var size = document.getElementById("size");

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");

    li1.setAttribute('id', name.value);
    li1.appendChild(document.createTextNode(name.value));
    ul1.appendChild(li1);

    li2.setAttribute('id', desc.value);
    li2.appendChild(document.createTextNode(desc.value));
    ul2.appendChild(li2);

    li3.setAttribute('id', size.value);
    li3.appendChild(document.createTextNode(size.value));
    ul3.appendChild(li3);

    console.log("working add btn");
}

function remove() {
    var ul1 = document.getElementById("name-list");
    var name = document.getElementById("name");
    var item1 = document.getElementById(name.value);
    ul1.removeChild(item1);

    var ul2 = document.getElementById("desc-list");
    var desc = document.getElementById("desc");
    var item2 = document.getElementById(desc.value);
    ul2.removeChild(item2);

    var ul3 = document.getElementById("size-list");
    var size = document.getElementById("size");
    var item3 = document.getElementById(size.value);
    ul3.removeChild(item3);

    console.log("working remove btn");
}