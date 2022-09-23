const body = document.querySelector("body");

//NavBar
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
body.appendChild(mainContainer);

const navbar = document.createElement("nav");
navbar.setAttribute("class", "navbar");

const navbar_brand = document.createElement("a");
navbar_brand.setAttribute("href", "#");
navbar_brand.setAttribute("class", "logo");
navbar_brand.style.display = "flex";
navbar_brand.innerHTML = `
<img style="width: 50px; margin-right: 10px"  src="../img/paw.png" /> 
PetCare
`;
const navbar_list = document.createElement("div");
navbar_list.setAttribute("class", "nav-links");

const navbar_menu = document.createElement("div");
navbar_menu.setAttribute("class", "menu");

const navbar_home = document.createElement("a");
const home_href = document.createElement("a");
home_href.setAttribute("href", "#home-container");
navbar_home.onclick = () => applySelectedStyle(navbar_home);

navbar_home.appendChild(home_href);
navbar_home.innerHTML = "Home";

function applySelectedStyle(element) {
    navbar_home.classList.remove("selected");
    navbar_services.classList.remove("selected");
    navbar_feedbacks.classList.remove("selected");
    element.classList.toggle("selected");
}

const navbar_services = document.createElement("a");
const services_href = document.createElement("a");
services_href.setAttribute("href", "services-container");
navbar_services.onclick = () => applySelectedStyle(navbar_services);
navbar_services.appendChild(services_href);
navbar_services.innerHTML = "Serviços";

const navbar_feedbacks = document.createElement("a");
const feedbacks_href = document.createElement("a");
feedbacks_href.setAttribute("href", "feedbacks-container");
navbar_feedbacks.onclick = () => applySelectedStyle(navbar_feedbacks);

navbar_feedbacks.appendChild(feedbacks_href);
navbar_feedbacks.innerHTML = "Feedbacks";

const navbar_darkmode = document.createElement("span");
const darkmode_input = document.createElement("input");
darkmode_input.setAttribute("type", "checkbox");
darkmode_input.setAttribute("class", "checkbox");
darkmode_input.setAttribute("id", "checkbox");

const darkmode_label = document.createElement("label");
darkmode_label.setAttribute("for", "checkbox");
darkmode_label.setAttribute("class", "label");

const darkmode_moon = document.createElement("i");
darkmode_moon.setAttribute("class", "fas fa-moon");
darkmode_moon.innerHTML = `
<img style="width: 18px; "  src="../img/moon.png" />
`;

const darkmode_sun = document.createElement("i");
darkmode_sun.setAttribute("class", "fas fa-sun");
darkmode_sun.innerHTML = `
<img style="width: 28px; "  src="../img/sun.png" />
`;

const darkmode_selector = document.createElement("div");
darkmode_selector.setAttribute("class", "selector");

darkmode_label.appendChild(darkmode_moon);
darkmode_label.appendChild(darkmode_sun);
darkmode_label.appendChild(darkmode_selector);

navbar_darkmode.appendChild(darkmode_input);
navbar_darkmode.appendChild(darkmode_label);

navbar_menu.appendChild(navbar_home);
navbar_menu.appendChild(navbar_services);
navbar_menu.appendChild(navbar_feedbacks);
navbar_menu.appendChild(navbar_darkmode);
navbar_list.appendChild(navbar_menu);

navbar.appendChild(navbar_brand);
navbar.appendChild(navbar_list);

//Home
const home_container = document.createElement("div");
home_container.setAttribute("id", "home-container");

const subcontainer_home = document.createElement("div");
subcontainer_home.setAttribute("class", "container");

subcontainer_home.innerText =
    "Cuidados de alta qualidade para animais de estimação que você vai adorar";

const home_content = document.createElement("h1");
home_container.setAttribute("class", "home-text");

subcontainer_home.appendChild(home_content);
home_container.appendChild(subcontainer_home);

//Serviço
const teste = document.createElement("div");
teste.innerText = "teste";

document.body.appendChild(teste);
//Feedback
//Contatos
mainContainer.appendChild(navbar);
mainContainer.appendChild(home_container);

//darkmode
const checkbox = document.getElementById("checkbox");

let logo = document.querySelector(".logo");

const menu = document.querySelector(".menu");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    navbar.classList.toggle("dark");

    navbar_menu.classList.toggle("dark");

    for (let tag of menu.children) {
        if (tag.tagName.toLowerCase() === "a") tag.classList.toggle("dark");
    }

    logo.classList.toggle("dark");
});
