
const WHATSAPP_NUMBER = "918879836026";
const DEFAULT_MESSAGES = {
  appointment: "Hello, I would like to book an appointment at Shree Vishwa-Amod Ayurveda & Panchakarma Centre.",
  service: "Hello, I would like to book an appointment and enquire about a treatment."
};
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll("[data-wa]").forEach(el => {
  const type = el.dataset.wa;
  let message = DEFAULT_MESSAGES[type] || DEFAULT_MESSAGES.appointment;
  if (type === "service" && el.dataset.service) message = `Hello, I would like to book an appointment for ${el.dataset.service}. Please share the available timings.`;
  el.href = waLink(message);
  el.target = "_blank";
  el.rel = "noopener";
});
document.querySelectorAll("[data-product]").forEach(el => {
  const name = el.dataset.product;
  const price = el.dataset.price;
  el.href = waLink(`Hello, I would like to buy ${name} priced at ₹${price}. Please share the ordering details.`);
  el.target = "_blank";
  el.rel = "noopener";
});
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}
