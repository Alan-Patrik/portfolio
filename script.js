/*==================== abrir e fechar menu hamburguer ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== ativar links ao rolar rolar com o scroll na pagina ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    let offset = sec.offsetTop - 150;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/*==================== funcionalidade da navegação da página formação ====================*/
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach(tabRemove => {tabRemove.classList.remove("active")});
    tab.classList.add("active");

    let lineY = document.querySelector(".line-y");
    lineY.style.height = event.target.offsetHeight + "px";
    lineY.style.top = event.target.offsetTop + "px";
    
    let lineX = document.querySelector(".line-x");
    lineX.style.width = event.target.offsetWidth + "px";
    lineX.style.left = event.target.offsetLeft + "px";

    all_content.forEach(content => content.classList.remove("active"));
    all_content[index].classList.add("active");
  })
});

/*==================== funcionalidade do formulário ====================*/
let nome = document.getElementById('name');
let email = document.getElementById('email');
let mensagem = document.getElementById('textarea');

form.addEventListener("submit", (event) => {
  event.preventDefault() // função que não permite a página ser atualizada quando o formulário é submetido.
  enviar();
})

/*
* verifica se os inputs estão vazios. Se estiverem preenchidos de acordo com suas validações próprias,
* ela permite o envio. Se não, exibe uma mensagem de campo obrigatório e não permite o envio.
*/
function enviar() {
  if (nome.value != "" && email.value != "" && mensagem.value != "") {
    alert('Obrigado ' + nome.value + ' por entrar em contato. Seus dados foram enviados com sucesso!');
    nome.value= "";
    email.value= "";
    mensagem.value= "";
  }
}