const popupManager = document.createElement("div")
popupManager.id = "popup"

document.body.appendChild(popupManager)

var popupTriggers = [];


function buildTitleBar(titleText) {
    const root = document.createElement("div")
    const closeBtn = document.createElement("button")
    const title = document.createElement("span")
    title.classList.add("popup-title", "f-title-4")
    title.innerHTML = titleText
    closeBtn.classList.add("popup-close")
    closeBtn.innerHTML = "X"

    closeBtn.addEventListener("click", hidePopup)

    root.appendChild(title)

    root.appendChild(closeBtn)
    root.classList.add("popup-header")


    return root
}

function showPopup(title,content) {

    popupManager.innerHTML = ""

    const popup = document.createElement("div")
    popup.classList.add("popup")

    popup.appendChild(buildTitleBar(title))


    const contentEl = document.createElement("div")
    
    contentEl.innerHTML = content
    contentEl.classList.add("popup-content")


    popup.appendChild(contentEl)
    popupManager.appendChild(popup)


    reloadTriggers()

    popupManager.classList.add("open")
}

function hidePopup() {
    popupManager.classList.remove("open")
    popupManager.innerHTML = ""
    reloadTriggers()
}


async function handlePopupTrigger(event) {
    event.preventDefault()
    console.log("click")
    popupManager.innerHTML = ""

    console.dir(event.target.dataset)
    const src = event.target.dataset.popupSource
    const title = event.target.dataset.popupTitle

    if (src && title) {
        var res = await fetch("/popups/"+src+".html")

        if (res) {
            var text = await res.text()
            showPopup(title, text)
        }
    }
}



function reloadTriggers() {
    popupTriggers.forEach(trigger => {
        trigger.removeEventListener("click",handlePopupTrigger) 
    });

    popupTriggers = document.querySelectorAll('[data-trigger="popup"]')

    popupTriggers.forEach(trigger => {
        trigger.addEventListener("click",handlePopupTrigger) 
    });
}

reloadTriggers();



