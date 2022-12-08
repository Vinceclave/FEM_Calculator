const themePicker = document.querySelectorAll(".theme-btn")
const circleToggle = document.querySelector(".circle-picker")
const previousOpperand = document.querySelector(".previous-opperand")
const currentOpperand = document.querySelector(".current-opperand")
const numPads = document.querySelectorAll(".num-key")
let theme = localStorage.getItem('data-theme', 'dark')

numPads.forEach(keys => {
    keys.addEventListener('click', (e) => {
        switch (e.target.value) {
            case "x":
                currentOpperand.innerText += "*"
                break
            case "reset":
                previousOpperand.innerText = ""
                currentOpperand.innerText = ""
                break
            case "del":
                let current = currentOpperand.innerText.slice(0, -1)
                currentOpperand.innerText = current
                break
            case "=":
                try {
                    let currentTotal = currentOpperand.innerText =   eval(currentOpperand.innerText)
                    previousOpperand.innerText = currentTotal
                } catch  { currentOpperand.innerHTML = "Error"
                }
                break
            default:
                currentOpperand.innerText += e.target.value;
                break;
        }
    })
})

// Theme calculator toggle

    themePicker.forEach(buttons => {
        buttons.addEventListener('click', function() {
            if (this.classList.contains("dark")) {
                changeThemeToDark()
            } else if (this.classList.contains("light")) {
                changeThemeToLight()
            } else if (this.classList.contains("colorful")) {        
                changeThemeToColorful()
            }
        })
    })

// color switcher toggle    
    const changeThemeToDark = () => {
        document.querySelector(".circle-picker").style.left = "0.15em"
        document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
        localStorage.setItem("data-theme", "dark") // save theme to local storage
    }
    
    const changeThemeToLight = () => {
        document.querySelector(".circle-picker").style.left = "0.66em"
        document.documentElement.setAttribute("data-theme", "light") // set theme light
        localStorage.setItem("data-theme", 'light') // save theme to local storage
    }
    
    const changeThemeToColorful = () => {
        document.querySelector(".circle-picker").style.left = "1.2em"
        document.documentElement.setAttribute("data-theme", "colorful") // set theme colorful
        localStorage.setItem("data-theme", 'colorful') // save theme to local storage
    }