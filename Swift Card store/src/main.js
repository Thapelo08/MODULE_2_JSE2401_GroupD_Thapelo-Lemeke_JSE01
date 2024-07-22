/*import './style.css'
import Alpine from 'alpinejs'
import { getCategories, fetchSingleProduct} from "./data/api.js"

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
              const data = await response.json();
              this.products = data;  
            } catch (error) {
                console.error(error);
            }
          },
         async init() {
            const categories = await getCategories();
            if (categories.error) {
                console.error(categories.error);
            } else {
                console.log(categories.response);
            }
            
            const singleProduct = await fetchSingleProduct(1);
            if (singleProduct.error) {
                console.error(singleProduct.error);
            } else {
                console.log(singleProduct.response);
            }
            this.fetchProducts();
         },
          
    }));
});*/


