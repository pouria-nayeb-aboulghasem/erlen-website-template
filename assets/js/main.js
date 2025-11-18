const navToggle = document.querySelector(".nav__toggle"),
    navClose = document.querySelector(".nav__close"),
    navMenu = document.querySelector(".nav__menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
}

// search

const search = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

if (search) {
    search.addEventListener('click', () => {
        searchContent.classList.add('active')
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('active')
    })
}

// login

const login = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content')

if (login) {
    login.addEventListener('click', () => {
        loginContent.classList.add('active')
    })
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('active')
    })
}

// tab

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();