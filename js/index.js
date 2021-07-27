const positions = document.querySelectorAll(".position");
const switcherPositions = document.querySelectorAll(".switcher__position");
const switcherPaginationScroll = document.querySelector(".switcher__inner-scroll");
const switcherPagination = document.querySelector(".switcher__pagination");

function addLoadedClass() {
    switcherPagination.classList.add("_loaded");
};

addLoadedClass();

function getPosition0PageY() {
    let positionPageY = positions[0].getBoundingClientRect().top + window.pageYOffset;
    let positionPageYBottom = positionPageY + positions[0].offsetHeight;
    if ((positionPageY - (window.innerHeight / 2)) <= window.pageYOffset && (positionPageYBottom - (window.innerHeight / 2)) > window.pageYOffset) {
        switcherPositions[0].classList.add("_active");
        switcherPaginationScroll.style.transform = "translate(0, 0)";
    } else {
        switcherPositions[0].classList.remove("_active")
    };
};

function getPosition1PageY() {
    let positionPageY = positions[1].getBoundingClientRect().top + window.pageYOffset;
    let positionPageYBottom = positionPageY + positions[1].offsetHeight;
    if ((positionPageY - (window.innerHeight / 2)) <= window.pageYOffset && (positionPageYBottom - (window.innerHeight / 2)) > window.pageYOffset) {
        switcherPositions[1].classList.add("_active");
        switcherPaginationScroll.style.transform = "translate(0, 100%)";
    } else {
        switcherPositions[1].classList.remove("_active")
    };
};

function getPosition2PageY() {
    let positionPageY = positions[2].getBoundingClientRect().top + window.pageYOffset;
    let positionPageYBottom = positionPageY + positions[2].offsetHeight;
    if ((positionPageY - (window.innerHeight / 2)) <= window.pageYOffset && (positionPageYBottom - (window.innerHeight / 2)) > window.pageYOffset) {
        switcherPositions[2].classList.add("_active");
        switcherPaginationScroll.style.transform = "translate(0, 200%)";
    } else {
        switcherPositions[2].classList.remove("_active")
    };
};

function getPosition3PageY() {
    let positionPageY = positions[3].getBoundingClientRect().top + window.pageYOffset;
    let positionPageYBottom = positionPageY + positions[3].offsetHeight;
    if ((positionPageY - (window.innerHeight / 2)) <= window.pageYOffset && (positionPageYBottom - (window.innerHeight / 2)) > window.pageYOffset) {
        switcherPositions[3].classList.add("_active");
        switcherPaginationScroll.style.transform = "translate(0, 300%)";
    } else {
        switcherPositions[3].classList.remove("_active")
    };
};

switcherPositions[0].classList.add("_active");
window.addEventListener("scroll", getPosition0PageY);
window.addEventListener("scroll", getPosition1PageY);
window.addEventListener("scroll", getPosition2PageY);
window.addEventListener("scroll", getPosition3PageY);

function setScrollType() {
    if (switcherPagination.classList.contains("_free")) {
        switcherPagination.classList.remove("_free");
    }

    for (let index = 0; index < positions.length; index++) {
        const position = positions[index];
        const positionContent = position.querySelector(".position__content");
        if (positionContent) {
            const positionContentHeight = positionContent.offsetHeight;
            if (window.innerHeight <= positionContentHeight) {
                switcherPagination.classList.add("_free");
                break;
            }
        }
    }
}

setScrollType();
window.addEventListener("resize", setScrollType);

