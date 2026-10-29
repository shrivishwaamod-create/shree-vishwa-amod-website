/*
  SHREE VISHWA-AMOD WEBSITE SETTINGS
  1. Replace every placeholder below before publishing.
  2. WhatsApp number format: country code + number, digits only.
     India example format: 919876543210 (do not include +, spaces or hyphens).
*/

const SITE_SETTINGS = {
  whatsappNumber: "91XXXXXXXXXX", // REPLACE with the clinic's WhatsApp number
  youtubeUrl: "https://www.youtube.com/@YOUR_HANDLE", // REPLACE with real channel link
  instagramUrl: "https://www.instagram.com/YOUR_HANDLE/", // REPLACE with real profile link
  facebookUrl: "https://www.facebook.com/YOUR_PAGE/", // REPLACE with real page link
  googleReviewUrl: "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review", // REPLACE with real Google review link
  googleMapsUrl: "https://maps.google.com/?q=YOUR+CLINIC+ADDRESS" // REPLACE with correct map/directions link
};

const messages = {
  appointment: "Hello, I would like to enquire about booking an appointment at Shree Vishwa-Amod Ayurved & Panchakarma Centre.",
  general: "Hello, I would like to know more about Shree Vishwa-Amod Ayurved & Panchakarma Centre.",
  consultation: "Hello, I would like to enquire about an Ayurvedic consultation.",
  panchakarma: "Hello, I would like to enquire about Panchakarma services, availability and suitability.",
  wellness: "Hello, I would like to enquire about wellness guidance.",
  contact: "Hello, I am contacting you through the Shree Vishwa-Amod website."
};

function makeWhatsAppLink(message) {
  const number = SITE_SETTINGS.whatsappNumber.replace(/\D/g, "");
  if (!number || number.includes("XXXXXXXXXX") || number.length < 10) return "https://wa.me/";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach(link => {
  const key = link.getAttribute("data-whatsapp");
  link.href = makeWhatsAppLink(messages[key] || messages.general);
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-whatsapp-product]").forEach(link => {
  const product = link.getAttribute("data-whatsapp-product");
  const message = `Hello, I would like to enquire about ${product}. Please share availability, price, ingredients and usage information.`;
  link.href = makeWhatsAppLink(message);
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll("[data-social]").forEach(link => {
  const key = link.getAttribute("data-social");
  const url = SITE_SETTINGS[`${key}Url`];
  link.href = url || "#";
  link.target = "_blank";
  link.rel = "noopener";
  if (!url || url.includes("YOUR_")) {
    link.title = "Replace this placeholder with the clinic's real social media URL in script.js";
  }
});

document.querySelectorAll("[data-google-review]").forEach(link => {
  link.href = SITE_SETTINGS.googleReviewUrl;
  if (SITE_SETTINGS.googleReviewUrl.includes("YOUR_")) link.title = "Replace the placeholder Google review URL in script.js";
});

document.querySelectorAll("[data-maps]").forEach(link => {
  link.href = SITE_SETTINGS.googleMapsUrl;
  if (SITE_SETTINGS.googleMapsUrl.includes("YOUR+")) link.title = "Replace the placeholder Google Maps URL in script.js";
});

document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
