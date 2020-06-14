const mqDark = window.matchMedia("(prefers-color-scheme: dark)")
const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeText = darkModeToggle.querySelector("span")
const bodyTag = document.querySelector("body")
const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

darkModeToggle.addEventListener("click", (event) =>{
    

    const timeline = gsap.timeline()

    timeline 
        .set("div.wiper", {height:"0%", top:"0%"})
        .to("div.wiper", { height:"100%", duration: 1})
        .add(() =>{
            bodyTag.classList.toggle("dark-mode")

            if(bodyTag.classList.contains("dark-mode")){
                darkModeText.innerHTML = "Light Mode"
                gsap.to("g.toggle", {x: 43})
        
            } else{
                darkModeText.innerHTML = "Dark Mode"
                gsap.to("g.toggle", {x: 19})
            }
        })

        .to("div.wiper", {height:0, top:"100%", duration: 2})

        event.preventDefault()
})

menuToggle.addEventListener("click", () =>{
    bodyTag.classList.toggle("nav-open")

    if(bodyTag.classList.contains("nav-open")){
        menuToggleText.innerHTML = "Close"

        gsap.to(".burger-top", {rotation: 45, transformOrigin: "50% 50%", y: 8})
        gsap.to(".burger-bottom", {rotation: -45, transformOrigin: "50% 50%", y: -8})
        gsap.to(".burger-mid", {width: 0, transformOrigin:"50% 50%"})

    } else{
        menuToggleText.innerHTML = "Menu"

        gsap.to(".burger-top", {rotation: 0, y:0})
        gsap.to(".burger-bottom", {rotation: 0, y:0})
        gsap.to(".burger-mid", {width: 28})
    }
})

const updateDarkMode = () => {
    if(mqDark.matches){
        bodyTag.classList.add("dark-mode")
        darkModeText.innerHTML = "Light Mode"

        gsap.to("g.toggle", {x: 43})

    } else{
        bodyTag.classList.remove("dark-mode")
        darkModeText.innerHTML = "Dark Mode"

        gsap.to("g.toggle", {x: 19})
    }
}

updateDarkMode()

mqDark.addListener(() =>{
    updateDarkMode()
})




const spiralTimeline = gsap.timeline({
    repeat: -1
})

spiralTimeline 

    .set( "svg.spiral rect",{
        rotation:0,
        transformOrigin:"50% 50%"
    })
    .set("svg.spiral rect:nth-child(1)",{
        rotation:15
    })
    .set("svg.spiral rect:nth-child(3)",{
        rotation:-15
    })
    .to("svg.spiral rect", { 
        rotation: "+=90", 
        transformOrigin:"50% 50%",
        duration: 4,
        stagger: -0.25
    })

    
