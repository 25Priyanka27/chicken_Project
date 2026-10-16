const menuItems = [
  { name: "Chicken Thali", category: "chicken", price: "₹180", icon: "🍗", desc: "Complete chicken meal with curry, bhakri/roti, rice and sides." },
  { name: "Chicken Curry", category: "chicken", price: "₹160", icon: "🍲", desc: "Tender chicken cooked in a rich, aromatic Indian gravy." },
  { name: "Chicken Masala", category: "chicken", price: "₹190", icon: "🌶️", desc: "Spicy and flavourful chicken masala made fresh." },
  { name: "Chicken Biryani", category: "rice", price: "₹180", icon: "🍚", desc: "Fragrant rice layered with juicy chicken and aromatic spices." },
  { name: "Chicken Fried Rice", category: "rice", price: "₹150", icon: "🥘", desc: "Wok-style rice tossed with chicken, vegetables and seasoning." },
  { name: "Chicken Lollipop", category: "starter", price: "₹180", icon: "🍗", desc: "Crispy, juicy chicken starter with a spicy finish." },
  { name: "Chicken 65", category: "starter", price: "₹170", icon: "🔥", desc: "Crispy bite-sized chicken with bold South Indian flavours." },
  { name: "Chicken Tikka", category: "starter", price: "₹200", icon: "🍢", desc: "Juicy marinated chicken pieces grilled with smoky flavour." },
  { name: "Egg Bhurji", category: "starter", price: "₹90", icon: "🥚", desc: "Indian-style scrambled eggs with onion, tomato and spices." }
];

const menuGrid = document.getElementById("menuGrid");

function renderMenu(category = "all") {
  const filtered = category === "all"
    ? menuItems
    : menuItems.filter(item => item.category === category);

  menuGrid.innerHTML = filtered.map(item => `
    <article class="menu-item">
      <div class="menu-photo">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price-row">
        <span class="price">${item.price}</span>
        <span>★ Popular</span>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    renderMenu(button.dataset.category);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
renderMenu();
