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

    Alpine.data("homeComponent", () => ({
        products: [],
        async fetchProducts() {
            try {
                const response = await
                fetch ("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new error(
                           "Data fetching failed, please check your network connection");
                    
                }
                
            }
        }
    }))
})


