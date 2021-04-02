var theme = 0
let defaulttheme = window.matchMedia('(prefers-color-scheme: dark)').matches
themeupdate = () => {
    if (theme == 0) {
        document.getElementById("themeindicator").innerText = "Default"
        if (defaulttheme == true)   {
            document.documentElement.style.setProperty("--black", "#1c1c1c")
            document.documentElement.style.setProperty("--body", "#333")
            document.documentElement.style.setProperty("--white", "#fff")
            document.documentElement.style.setProperty("--highlight", "#f54260")
        } else  {
            document.documentElement.style.setProperty("--black", "#f2f2f2")
            document.documentElement.style.setProperty("--body", "#fff")
            document.documentElement.style.setProperty("--white", "#575e75")
            document.documentElement.style.setProperty("--highlight", "#0fbd8c")
        }
    }
    if (theme == 1) {
        document.getElementById("themeindicator").innerText = "Dark Mode"
        document.documentElement.style.setProperty("--black", "#1c1c1c")
        document.documentElement.style.setProperty("--body", "#333")
        document.documentElement.style.setProperty("--white", "#fff")
        document.documentElement.style.setProperty("--highlight", "#f54260")
    }
    if (theme == 2) {
        document.getElementById("themeindicator").innerText = "Light Mode"
        document.documentElement.style.setProperty("--black", "#f2f2f2")
        document.documentElement.style.setProperty("--body", "#fff")
        document.documentElement.style.setProperty("--white", "#575e75")
        document.documentElement.style.setProperty("--highlight", "#0fbd8c")
    }
    
}
themeswitch = () =>  {
    if (theme == 0 || theme == 1) {
        theme++
    } else  {
        theme = 0
    }
    localStorage.setItem("theme", theme)
    themeupdate()
}
themeupdate()