// Variables

var parentMenu = document.getElementById('parentMenu');
var hamburger = document.getElementById('hamburger');
var cross = document.getElementById('cross');
var searchBtn = document.getElementById('searchBtn');
var lineSearchBtn = document.getElementById('lineSearchBtn');
var searchContainer = document.getElementById('mainSearchContainer');
var toggleSctn1 = document.getElementById('toggleSctn1');
var toggleSctn2 = document.getElementById('toggleSctn2');
var toggleSctn3 = document.getElementById('toggleSctn3');
var toggleSctn4 = document.getElementById('toggleSctn4');
var toggleSctn5 = document.getElementById('toggleSctn5');
var toggleSctn6 = document.getElementById('toggleSctn6');
var toggleBtn1 = document.getElementById('toggleBtn1');
var toggleBtn2 = document.getElementById('toggleBtn2');
var toggleBtn3 = document.getElementById('toggleBtn3');
var toggleBtn4 = document.getElementById('toggleBtn4');
var toggleBtn5 = document.getElementById('toggleBtn5');
var toggleBtn6 = document.getElementById('toggleBtn6');
var itemOpen1 = false;
var itemOpen2 = false;
var itemOpen3 = false;
var itemOpen4 = false;
var itemOpen5 = false;
var itemOpen6 = false;
var menuBarChange = document.getElementById('menuBarContainer');



// Display and close main menu and toggle hamburger button
//------------------------------------------------------------

hamburger.onclick = function() {

    parentMenu.classList.remove("menuInnactive");
    parentMenu.classList.add("menuActive");
    hamburger.style.display = 'none';
    cross.style.display = 'block';
    searchContainer.classList.remove("searchMenuActive");
    searchContainer.classList.add("searchMenuInnactive");
    searchBtn.style.display = 'block';
    lineSearchBtn.style.display = 'none';
}

cross.onclick = function() {

    parentMenu.classList.remove("menuActive");
    parentMenu.classList.add("menuInnactive");
    cross.style.display = 'none';
    hamburger.style.display = 'block';
    collapseAll ();
}



// Toggle on and off top search function
//------------------------------------------------------------

searchBtn.onclick = function() {

    parentMenu.classList.remove("menuActive");
    parentMenu.classList.add("menuInnactive");
    searchContainer.classList.remove("searchMenuInnactive");
    searchContainer.classList.add("searchMenuActive");
    searchBtn.style.display = 'none';
    lineSearchBtn.style.display = 'block';
    hamburger.style.display = 'block';
    cross.style.display = 'none';
    collapseAll ();
}

lineSearchBtn.onclick = function() {
    searchBtn.style.display = 'block';
    lineSearchBtn.style.display = 'none';
    searchContainer.classList.remove("searchMenuActive");
    searchContainer.classList.add("searchMenuInnactive");
}


// Mobile : Toggle child menu items -Accordian
//------------------------------------------------------------

toggleBtn1.onclick = function() {
    if (window.matchMedia("(min-width: 821px)").matches) {
        location.href = 'https://www.stepchange.org/how-we-help.aspx';
    } else if (itemOpen1 === false) {
        toggleSctn1.style.display = 'block';
        itemOpen1 = true;
        itemOpen2 = false;
        itemOpen3 = false;
        itemOpen4 = false;
        itemOpen5 = false;
        itemOpen6 = false;
        toggleSctn2.style.display = 'none';
        toggleSctn3.style.display = 'none';
        toggleSctn4.style.display = 'none';
        toggleSctn5.style.display = 'none';
        toggleSctn6.style.display = 'none';
    } else {
        toggleSctn1.style.display = 'none';
        itemOpen1 = false;
    }
}

toggleBtn2.onclick = function() {
    if (window.matchMedia("(min-width: 821px)").matches) {
        location.href = 'https://www.stepchange.org/debt-info.aspx';
    } else if (itemOpen2 === false) {
        toggleSctn2.style.display = 'block';
        itemOpen1 = false;
        itemOpen2 = true;
        itemOpen3 = false;
        itemOpen4 = false;
        itemOpen5 = false;
        itemOpen6 = false;
        toggleSctn1.style.display = 'none';
        toggleSctn3.style.display = 'none';
        toggleSctn4.style.display = 'none';
        toggleSctn5.style.display = 'none';
        toggleSctn6.style.display = 'none';
    } else {
        toggleSctn2.style.display = 'none';
        itemOpen2 = false;
    }
}

toggleBtn3.onclick = function() {
    if (window.matchMedia("(min-width: 821px)").matches) {
        location.href = 'https://www.stepchange.org/clients.aspx';
    } else if (itemOpen3 === false) {
        toggleSctn3.style.display = 'block';
        itemOpen1 = false;
        itemOpen2 = false;
        itemOpen3 = true;
        itemOpen4 = false;
        itemOpen5 = false;
        itemOpen6 = false;
        toggleSctn1.style.display = 'none';
        toggleSctn2.style.display = 'none';
        toggleSctn4.style.display = 'none';
        toggleSctn5.style.display = 'none';
        toggleSctn6.style.display = 'none';
    } else {
        toggleSctn3.style.display = 'none';
        itemOpen3 = false;
    }
}

toggleBtn4.onclick = function() {
    if (window.matchMedia("(min-width: 821px)").matches) {
        location.href = 'https://www.stepchange.org/policy-and-research.aspx';
    } else if (itemOpen4 === false) {
        toggleSctn4.style.display = 'block';
        itemOpen1 = false;
        itemOpen2 = false;
        itemOpen3 = false;
        itemOpen4 = true;
        itemOpen5 = false;
        itemOpen6 = false;
        toggleSctn1.style.display = 'none';
        toggleSctn2.style.display = 'none';
        toggleSctn3.style.display = 'none';
        toggleSctn5.style.display = 'none';
        toggleSctn6.style.display = 'none';
    } else {
        toggleSctn4.style.display = 'none';
        itemOpen4 = false;
    }
}

toggleBtn5.onclick = function() {
    if (window.matchMedia("(min-width: 821px)").matches) {
        location.href = 'https://www.stepchange.org/about-us.aspx';
    } else if (itemOpen5 === false) {
        toggleSctn5.style.display = 'block';
        itemOpen1 = false;
        itemOpen2 = false;
        itemOpen3 = false;
        itemOpen4 = false;
        itemOpen5 = true;
        itemOpen6 = false;
        toggleSctn1.style.display = 'none';
        toggleSctn2.style.display = 'none';
        toggleSctn3.style.display = 'none';
        toggleSctn4.style.display = 'none';
        toggleSctn6.style.display = 'none';
    } else {
        toggleSctn5.style.display = 'none';
        itemOpen5 = false;
    }
}

toggleBtn6.onclick = function() {
    if (window.matchMedia("(min-width: 821px)").matches) {
        location.href = 'https://www.stepchange.org/contact-us.aspx';
    } else if (itemOpen6 === false) {
        toggleSctn6.style.display = 'block';
        itemOpen1 = false;
        itemOpen2 = false;
        itemOpen3 = false;
        itemOpen4 = false;
        itemOpen5 = false;
        itemOpen6 = true;
        toggleSctn1.style.display = 'none';
        toggleSctn2.style.display = 'none';
        toggleSctn3.style.display = 'none';
        toggleSctn4.style.display = 'none';
        toggleSctn5.style.display = 'none';
    } else {
        toggleSctn6.style.display = 'none';
        itemOpen6 = false;
    }
}




// Collapse all function //

function collapseAll () {
    toggleSctn1.style.display = 'none';
    toggleSctn2.style.display = 'none';
    toggleSctn3.style.display = 'none';
    toggleSctn4.style.display = 'none';
    toggleSctn5.style.display = 'none';
    toggleSctn6.style.display = 'none';
    itemOpen1 = false;
    itemOpen2 = false;
    itemOpen3 = false;
    itemOpen4 = false;
    itemOpen5 = false;
    itemOpen6 = false;
}



// Desktop hover actions //

// Section 1 //

toggleBtn1.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn1.style.display = 'block';
    }
}

toggleBtn1.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn1.style.display = 'none';
    }
}

toggleSctn1.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn1.style.display = 'block';
    }
}

toggleSctn1.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn1.style.display = 'none';
    }
}

// Section 2 //

toggleBtn2.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn2.style.display = 'block';
    }
}

toggleBtn2.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn2.style.display = 'none';
    }
}

toggleSctn2.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn2.style.display = 'block';
    }
}

toggleSctn2.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn2.style.display = 'none';
    }
}

// Section 3 //

toggleBtn3.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn3.style.display = 'block';
    }
}

toggleBtn3.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn3.style.display = 'none';
    }
}

toggleSctn3.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn3.style.display = 'block';
    }
}

toggleSctn3.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn3.style.display = 'none';
    }
}

// Section 4 //

toggleBtn4.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn4.style.display = 'block';
    }
}

toggleBtn4.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn4.style.display = 'none';
    }
}

toggleSctn4.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn4.style.display = 'block';
    }
}

toggleSctn4.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn4.style.display = 'none';
    }
}

// Section 5 //

toggleBtn5.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn5.style.display = 'block';
    }
}

toggleBtn5.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn5.style.display = 'none';
    }
}

toggleSctn5.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn5.style.display = 'block';
    }
}

toggleSctn5.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn5.style.display = 'none';
    }
}

// Section 6 //

toggleBtn6.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn6.style.display = 'block';
    }
}

toggleBtn6.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn6.style.display = 'none';
    }
}

toggleSctn6.onmouseover = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn6.style.display = 'block';
    }
}

toggleSctn6.onmouseout = function () {
    if (window.matchMedia("(min-width: 821px)").matches) {
    toggleSctn6.style.display = 'none';
    }
}


