import './style.css'
import Alpine from 'alpinejs'
import api from "./data/api.js"

wondow.Alpine = Alpine

Alpine.start()

document.addEventListener("alpine:init", () => {
    Alpine.data("headerComponent", () => ({
        init() {
            console.log("Header component initialized");
        },
    }));

    
})


