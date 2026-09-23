const openAsideButton = document.getElementById("open-aside");
const closeAsideButton = document.getElementById("close-aside");
const asideMenu = document.querySelector(".aside-menu");

if (openAsideButton && asideMenu && closeAsideButton) {
    openAsideButton.addEventListener(
        "click",
        () => {
            asideMenu.classList.add("open");
        }
    );

    closeAsideButton.addEventListener("click", () => {
        asideMenu.classList.remove("open");
    })
}