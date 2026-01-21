const items = document.querySelectorAll("ul li");

items.forEach((item) => {
    /** @type {HTMLElement} */

    const element = item;
    element.addEventListener("click", () => {

        items.forEach(item => {
            item.classList.remove("selected");
        })

        element.classList.add("selected");
    })
})