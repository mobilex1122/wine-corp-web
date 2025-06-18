const homeNav = document.getElementById("homenav")
if (homeNav) {
    window.addEventListener("scroll",(ev) => {
        if (window.scrollY > 10) {
            homeNav.classList.add("scroll")
        } else {
            homeNav.classList.remove("scroll")
        }
    })
}


const navOpen = document.getElementById("nav-open")
const navClose = document.getElementById("nav-close")
const nav = document.getElementById("nav")

if (nav && navOpen && navClose) {
    navOpen.addEventListener("click", () => {
        nav.classList.add("open")
    })

    navClose.addEventListener("click", () => {
        nav.classList.remove("open")
    })


}