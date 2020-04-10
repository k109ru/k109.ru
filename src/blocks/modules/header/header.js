function addActiveNaV() {
    const arr = [...document.querySelectorAll(".nav__item")];
    const arr2 = [...document.querySelectorAll(".drop-menu__item")];

    arr.map((item) => {
        if(location.pathname === item.firstChild.nextSibling.pathname){
            item.classList.add("nav__item--active");
        }
    });

    arr2.map((item) => {
        if(location.pathname === item.firstChild.nextSibling.pathname){
            item.classList.add("drop-menu__item--active");
        }
    });
}

addActiveNaV();