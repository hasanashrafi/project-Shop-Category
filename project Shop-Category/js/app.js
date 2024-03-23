//Variables
//access to the search input
const searchInput = document.querySelector('#search-input')
//access to the all product items
const products = document.querySelectorAll(".products-item")
//access to the all buttons
const buttons = document.querySelectorAll(".filter")
//access to the price button
const priceButton = document.getElementById('search-price').querySelector("button")
//Functions
//change selected button style on category
const changeClass = (filter) => {
    buttons.forEach(button => {
        if (button.dataset.filter === filter) {
            button.classList.add("selected")
        } else {
            button.classList.remove("selected")
        }
    });
}
const searchHandler = (event) => {
    //get input value for item search
    const searchValue = event.target.value.toLowerCase().trim();
    products.forEach(product => {
        //get items description values as name 
        const productName = product.children[1].innerText.toLowerCase();
        //Comparison input value with items value
        if (productName.includes(searchValue)) {
            //if item exist be shown
            product.style.display = 'block';
        } else {
            //if not exist don't show
            product.style.display = 'none';
        }
    });
}

const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
    changeClass(filter)
    products.forEach(product => {
        const category = product.dataset.category
        if (filter === "all") {
            product.style.display = 'block';
        } else {
            //comparison selected category with products
            filter === category
                ? (product.style.display = 'block')
                : (product.style.display = 'none');
            // if (filter === category) {
            //     product.style.display = 'block';
            // } else {
            //     product.style.display = 'none';
            // }
        }
    });
}

const searchPriceHandler = (event) => {
    const searchPrice = +event.target.parentElement.children[0].value
    products.forEach(product => {
        const productPrice = product.children[2].innerText
        const price = +productPrice.split(" ")[1]
        if (!searchPrice) {
            product.style.display = "block"
        } else {
            searchPrice === price ? product.style.display = "block" : product.style.display = "none"
        }
    })
}

//EventListeners
window.addEventListener("load", () => {
    buttons.forEach(button => {
        button.addEventListener("click", filterHandler)
    });
    searchInput.addEventListener("keyup", searchHandler);
    priceButton.addEventListener("click", searchPriceHandler)
})    
