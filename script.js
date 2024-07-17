const menuItems = [
    { name: "Coxinha Tradicional", description: "Coxinha recheada com frango.", price: "R$10,00", image: "Imagens/Tradicional.png" },
    { name: "Coxinha Clássica", description: "Coxinha recheada com frango e requeijão cremoso.", price: "R$10,50", image: "Imagens/Clássica.png" },
    { name: "Coxinha Italiana", description: "Coxinha recheada com frango, queijo, presunto, calabresa e orégano.", price: "R$10,00", image: "Imagens/Italiana.png" },
    { name: "Coxinha Baiana", description: "Coxinha recheada com frango, carne, calabresa, requeijão cremoso, azeitonas e orégano.", price: "R$10,50", image: "Imagens/Coxinha Baiana.png" },
    { name: "Coxinha Sertaneja", description: "Coxinha recheada com charque desfiado, banana caramelizada e cream cheese, empanada na tapioca.", price: "R$12,00", image: "Imagens/Sertaneja.png" },
    { name: "Coxinha Nordestina", description: "Coxinha recheada com carne do sol, creme de aipim e mussarela, empanada na tapioca.", price: "R$12,00", image: "Imagens/Nordestina.png" },
    { name: "Coxinha Queijos", description: "Coxinha recheada com Provolone, mussarela e requeijão cremoso.", price: "R$12,00", image: "Imagens/Queijos.png" },
    { name: "Coxinha de Camarão", description: "Coxinha recheada com camarões frescos salteados no azeite de oliva e queijo mussarela, empanada na tapioca.", price: "R$16,00", image: "Imagens/Camarão.png" }
];

const menuGrid = document.querySelector(".menu-grid"); 

menuItems.forEach(item => {
    const menuOption = document.createElement("div");
    menuOption.classList.add("menu-option");
    menuOption.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="option-details">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        </div>
    `;
    menuGrid.appendChild(menuOption);
});