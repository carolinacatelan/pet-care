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
<img style="width: 50px; margin-right: 10px"  src="img/paw.png" /> 
PetCare
`;
const navbar_list = document.createElement("div");
navbar_list.setAttribute("class", "nav-links");

const navbar_menu = document.createElement("div");
navbar_menu.setAttribute("class", "menu");

const navbar_home = document.createElement("a");
navbar_home.setAttribute("href", "#home-container");
navbar_home.onclick = () => applySelectedStyle(navbar_home);
navbar_home.innerHTML = "Home";

const navbar_services = document.createElement("a");
navbar_services.setAttribute("href", "#service-container");
navbar_services.onclick = () => applySelectedStyle(navbar_services);
navbar_services.innerHTML = "Serviços";

const navbar_feedbacks = document.createElement("a");
navbar_feedbacks.setAttribute("href", "#feedback-container");
navbar_feedbacks.onclick = () => applySelectedStyle(navbar_feedbacks);
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
<img style="width: 18px; "  src="img/moon.png" />
`;

const darkmode_sun = document.createElement("i");
darkmode_sun.setAttribute("class", "fas fa-sun");
darkmode_sun.innerHTML = `
<img style="width: 28px; "  src="img/sun.png" />
`;

const darkmode_selector = document.createElement("div");
darkmode_selector.setAttribute("class", "selector");

function applySelectedStyle(element) {
    navbar_home.classList.remove("selected");
    navbar_services.classList.remove("selected");
    navbar_feedbacks.classList.remove("selected");
    element.classList.toggle("selected");
}

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

home_container.appendChild(subcontainer_home);

//Service
const service_container = document.createElement("div");
service_container.setAttribute("id", "service-container");

service_container.innerHTML = `
<div class = "container"> 
    <div class = "row">
        <div class = "col">
            <div class = "col-text">
                <div class = "icon">
                    <span><img style="width: 42px; "  src="./img/vet.png" /></span>
                </div>
                <div class = "media-body">
                    <h3 class="heading">Veterinário(a)</h3>
                    <p>
                        Sabemos que cada pet é um membro da família e por esse motivo estamos em constante busca do que há de melhor em estrutura, tecnologia e recursos que promovam a prevenção, o diagnóstico e o melhor acompanhamento deles. 
                        Na consulta, seu pet será avaliado por um dos nossos experientes médicos veterinários por meio de um exame completo. Nesse momento, você poderá esclarecer todas as dúvidas que tiver.
                        Havendo a necessidade de se realizar um exame ou procedimento esse só será realizado mediante a autorização prévia do responsável.
                    </p>
                </div>
            </div>
            </div>
            <div class = "col">
            <div class = "col-text">
                <div class = "icon">
                    <span><img style="width: 42px; "  src="./img/bathAndGroom.png" /></span>
                </div>
                <div class = "media-body">
                    <h3 class="heading">Banho e tosa</h3>
                    <p>
                    Essencial para promover a higiene aos animais, afinal, eles podem ser muito fofos, mas também podem ser portadores de mal cheiro e bactérias.

                    </p>
                </div>
            </div>
            </div>
            <div class = "col">
            <div class = "col-text">
                <div class = "icon">
                    <span><img style="width: 42px; "  src="./img/hotelAnimal.png" /></span>
                </div>
                <div class = "media-body">
                    <h3 class="heading">Hotel para animais</h3>
                    <p>
                    Temos um espaço arborizado e com bastante sombra, onde os cães e gatos podem circular livremente. Aqui seu cão e gatinho vão receber muito carinho e atenção.
                    Serviços: alimentação, banho, leva e traz.
                    Regras: trazer a carteirinha com as vacinas atualizadas, imunização contra ectoparazitas em dia (pulgas, carrapatos), vermifugação em dia, trazer a ração, brinquedos, não aceitamos cães e gatos agressivos ou com doenças infecto contagiosas.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

//feedbacks
const feedback_container = document.createElement("div");
feedback_container.setAttribute("id", "feedback-container");

const Http = new XMLHttpRequest();
const url = "https://randomuser.me/api/?results=3";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    let data = JSON.parse(Http.responseText);

    feedback_container.innerHTML = `
    <div class = "container"> 
        <div class = "title-row">
            <div class = "title-col">
                <h2>Feedbacks</h2>
            </div>
        </div>
        <div class = "row">
            <div class = "col">
                <div class = "col-text">
                    <div class = "icon">
                        <span><img style="width: 22px; "  src="./img/quote.png" /></span>
                    </div>
                    <div class = "media-body">
                        <p>
                            Senti muita confiança deixando a Nina no hotelzinho da PetCare, me atualizavam 1x ao dia com fotos, vídeos.
                            lorem ipsu lorem ipsu.
                        </p>
                    </div>
                    <div class = "user-feedback">
                        <div class = "user-img">
                            <img style="width: 100px; "  src="${data.results[0].picture.large}" />
                        </div>
                        <div class = "user-info">
                            <p class> ${
                                data.results[0].name.first + " " + data.results[0].name.last
                            }</p>
                            <span>${
                                data.results[0].location.city +
                                " - " +
                                data.results[0].location.country
                            }</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "col">
                <div class = "col-text">
                    <div class = "icon">
                        <span><img style="width: 22px; "  src="./img/quote.png" /></span>
                    </div>
                    <div class = "media-body">
                        <p>
                            Descobrimos que o Thanos é FeLV positivo, foi uma longa caminhada até conseguirmos encontrar a Dra. Rosangêla e ter um diagnóstico preciso.
                        </p>
                    </div>
                    <div class = "user-feedback">
                        <div class = "user-img">
                            <img style="width: 100px; "  src="${data.results[1].picture.large}" />
                        </div>
                        <div class = "user-info">
                            <p class> ${
                                data.results[1].name.first + " " + data.results[1].name.last
                            }</p>
                            <span>${
                                data.results[1].location.city +
                                " - " +
                                data.results[1].location.country
                            }</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "col">
                    <div class = "col-text">
                        <div class = "icon">
                            <span><img style="width: 22px; "  src="./img/quote.png" /></span>
                        </div>
                        <div class = "media-body">
                            <p>
                                A Alaska volta sempre cheirosa e sem nenhum nó nos pelos. Quando falamos que é dia de tomar banho, ela começa a festa logo cedo.
                            </p>
                        </div>
                        <div class = "user-feedback">
                            <div class = "user-img">
                                <img style="width: 100px; "  src="${
                                    data.results[2].picture.large
                                }" />
                            </div>
                            <div class = "user-info">
                                <p class> ${
                                    data.results[2].name.first + " " + data.results[2].name.last
                                }</p>
                                <span>${
                                    data.results[2].location.city +
                                    " - " +
                                    data.results[2].location.country
                                }</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `;
};

//button back to top
const btn_top = document.createElement("button");
btn_top.setAttribute("class", "btn-fixed");

btn_top.innerHTML = `
    <div><img style="width: 32px;"  src="./img/arrow.png" /></div>
`;

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        btn_top.classList.remove("visible");
    } else {
        btn_top.classList.add("visible");
    }
});

btn_top.addEventListener("click", function (event) {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// mainContainer
mainContainer.appendChild(navbar);
mainContainer.appendChild(home_container);
mainContainer.appendChild(service_container);
mainContainer.appendChild(feedback_container);
mainContainer.appendChild(btn_top);

//darkmode
const checkbox = document.getElementById("checkbox");
let logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    navbar.classList.toggle("dark");
    navbar_menu.classList.toggle("dark");
    service_container.classList.toggle("dark");
    feedback_container.classList.toggle("dark");

    for (let tag of menu.children) {
        if (tag.tagName.toLowerCase() === "a") tag.classList.toggle("dark");
    }

    logo.classList.toggle("dark");
});
