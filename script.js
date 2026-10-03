const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

const searchButton = document.getElementById("searchButton");
const closeSearch = document.getElementById("closeSearch");
const searchModal = document.getElementById("searchModal");

const buyButtons = document.querySelectorAll(".buy-button");

const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

const newsletterForm =
    document.getElementById("newsletterForm");


let cart = 0;


// MENU MOBILE

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


document.querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });



// BUSCA

searchButton.addEventListener("click", () => {

    searchModal.classList.add("active");

});


closeSearch.addEventListener("click", () => {

    searchModal.classList.remove("active");

});


searchModal.addEventListener("click", event => {

    if (event.target === searchModal) {

        searchModal.classList.remove("active");

    }

});



// CARRINHO

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.textContent = cart;


        const product =
            button.dataset.product;


        toast.textContent =
            `${product} adicionado ao carrinho!`;


        toast.classList.add("active");


        button.textContent = "✓ Adicionado";


        setTimeout(() => {

            toast.classList.remove("active");

            button.textContent =
                "Adicionar ao carrinho";

        }, 2200);

    });

});



// NEWSLETTER

newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.getElementById("email");


        toast.textContent =
            "Inscrição realizada com sucesso!";


        toast.classList.add("active");


        email.value = "";


        setTimeout(() => {

            toast.classList.remove("active");

        }, 2500);

    }
);



// ESC FECHA PESQUISA

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            searchModal.classList.remove(
                "active"
            );

        }

    }
);