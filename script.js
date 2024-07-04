const mobileMenu = document.querySelector(".mobile-menu");
const toggleMenu = document.querySelector(".toggle-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu nav a");
const projectListContainer = document.querySelector(".projects-list-container");

toggleMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  if (mobileMenu.classList.contains("active")) {
    toggleMenu.style.transform = "rotate(90deg)";
    toggleMenu.src = `./img/close-menu.png`;
  } else {
    toggleMenu.style.transform = "rotate(0deg)";
    toggleMenu.src = `./img/open-menu.png`;
  }
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    toggleMenu.style.transform = "rotate(0deg)";
    toggleMenu.src = `./img/open-menu.png`;
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Remove o #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 160;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

const projectsList = [
  {
    name: "Jokenpô",
    description:
      "Projeto criado do zero para treinar as habilidades de HTML, CSS, Javascript e responsividade.",
    online: "https://jokenpo-ten.vercel.app/",
    repo: "https://github.com/barbaraishioka/jokenpo",
    img: "https://github.com/barbaraishioka/jokenpo/blob/main/img/preview.png?raw=true",
  },
  {
    name: "Conversor de Moeda",
    description:
      "Projeto criado do zero para treinar as habilidades de HTML, CSS, Javascript e responsividade.",
    online: "https://conversor-moeda-six.vercel.app/",
    repo: "https://github.com/barbaraishioka/conversor-moeda",
    img: "https://github.com/barbaraishioka/conversor-moeda/blob/main/img/preview.png?raw=true",
  },
  {
    name: "Users CRUD API",
    description:
      "Gerenciamento de Usuários com Node.js, Express, Prisma e MongoDB",
    online: "https://github.com/barbaraishioka/users-crud-api",
    repo: "https://github.com/barbaraishioka/users-crud-api",
    img: "./img/api-rest.png",
  },
];

let currentIndex = 0;

function showProject(index) {
  // Verifica se o índice está dentro dos limites da lista de projetos
  if (index < 0) {
    currentIndex = projectsList.length - 1;
  } else if (index >= projectsList.length) {
    currentIndex = 0;
  }

  // Limpa o container antes de adicionar o próximo projeto
  projectListContainer.innerHTML = "";

  // Cria o elemento do projeto atual
  const project = projectsList[currentIndex];
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");

  projectElement.innerHTML = `
    <div class="project-info">
      <div>
        <h3>${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
          <a href="${project.online}" target="_blank" rel="noopener noreferrer">Ver online</a>
          <a href="${project.repo}" target="_blank" rel="noopener noreferrer">Ver código</a>
        </div>
      </div>
      <img src="${project.img}" alt="${project.name}" class="project-img">
    </div>
    <div class="back-next-btn-container">
      <button class="back-project" onclick="prevProject()">Anterior</button>
      <button class="next-project" onclick="nextProject()">Próximo</button>
    </div>
  `;

  // Adiciona o projeto ao container
  projectListContainer.appendChild(projectElement);
}

// Exibe o primeiro projeto ao carregar a página
showProject(currentIndex);

// Função para navegação manual no carrossel
function nextProject() {
  currentIndex++;
  showProject(currentIndex);
}

function prevProject() {
  currentIndex--;
  showProject(currentIndex);
}
