const homeNav = document.getElementById("homenav")

window.addEventListener("scroll",(ev) => {
    if (window.scrollY > 10) {
        homeNav.classList.add("scroll")
    } else {
        homeNav.classList.remove("scroll")
    }
})