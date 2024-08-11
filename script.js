const translations = {
  sk: {
    link1: "Kto Sme?",
    link2: "Produkty a Služby",
    link3: "Referencie",
    "hero-title": "H&nbsp;&nbsp;O Systems",
    "hero-description": "Vaša cesta k čistej vode",
    "hero-button": "Kto Sme?",
    "about-title": "O nás",
    "about-description-1":
      "H2O Systems je lídrom v oblasti vodovodných riešení. Sme inovatívna spoločnosť zameraná na poskytovanie udržateľných a efektívnych riešení pre všetky vaše vodovodné potreby.",
    "about-description-2":
      "Naša misia je zlepšiť prístup k čistej vode pre všetkých, či už ide o domácnosti, podniky alebo veľké priemyselné projekty.",
    "about-description-3":
      "Sme hrdí na naše odborné znalosti, inovatívne technológie a individuálny prístup k našim zákazníkom.",
    "products-title": "Produkty a Služby",
    "products-installation-title": "Inštalácia Vodovodných Potrubí",
    "products-installation-description":
      "Poskytujeme komplexné služby inštalácie vodovodných potrubí pre nové stavby, renovácie a rozšírenia.",
    "products-maintenance-title": "Údržba a Opravy",
    "products-maintenance-description":
      "Naše tímy sú pripravené na rýchle a efektívne riešenie akýchkoľvek problémov s vodovodnými potrubiami, aby ste mali vždy prístup k čistej vode.",
    "products-advice-title": "Poradenstvo a Dizajn",
    "products-advice-description":
      "Náš tím odborníkov vám pomôže s návrhom a implementáciou najlepších vodovodných riešení, ktoré vyhovujú vašim potrebám a rozpočtu.",
    "references-title": "Referencie",
    "reference1-text":
      "&quot;Spoločnosť H2O Systems nám poskytla výnimočnú službu pri inštalácii vodovodného systému v našom novom dome. Odporúčame ich každému.&quot;",
    "reference1-cite": "- Ján Novák, súkromný zákazník",
    "reference2-text":
      "&quot;S H2O Systems spolupracujeme už niekoľko rokov. Vždy sa môžeme spoľahnúť na ich odbornosť a spoľahlivosť.&quot;",
    "reference2-cite": "- Spoločnosť AquaCorp",
    "reference3-text":
      "&quot;S H2O Systems spolupracujeme už niekoľko rokov. Vždy sa môžeme spoľahnúť na ich odbornosť a spoľahlivosť.&quot;",
    "reference3-cite": "- Martin Richter, Priemyselný klient",
  },
  en: {
    link1: "Who Are We?",
    link2: "Products and Services",
    link3: "References",
    "hero-title": "H&nbsp;&nbsp;O Systems",
    "hero-description": "Your Path to Clean Water",
    "hero-button": "Who We Are?",
    "about-title": "About us",
    "about-description-1": "H2O Systems is a leader in water system solutions",
    "about-description-2":
      "Our mission is to improve access to clean water for everyone",
    "about-description-3": "We pride ourselves on our expertise",
    "products-title": "Products and Services",
    "products-installation-title": "Water Pipe Installation",
    "products-installation-description":
      "We provide comprehensive water pipe installation services for new buildings, renovations and extensions.",
    "products-maintenance-title": "Maintenance and Repairs",
    "products-maintenance-description":
      "Our teams are ready to quickly and efficiently solve any problems with water pipes, so that you always have access to clean water.",
    "products-advice-title": "Consulting and Design",
    "products-advice-description":
      "Our team of experts will help you design and implement the best plumbing solutions to suit your needs and budget.",
    "references-title": "References",
    "reference1-text":
      "&quot;H2O Systems provided us with exceptional service installing the plumbing system in our new home. We recommend them to everyone.&quot;",
    "reference1-cite": "- John Doe, Private Client",
    "reference2-text":
      "&quot;We have been working with H2O Systems for several years. We can always rely on their expertise and reliability.&quot;",
    "reference2-cite": "- AquaCorp Company",
    "reference3-text":
      "&quot;Solutions from H2O Systems helped us significantly improve our production processes. Their approach was professional and efficient.&quot;",
    "reference3-cite": "- Martin Smith, Industrial Client",
  },
};

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const selected = document.querySelector(".select-selected");
  const items = document.querySelector(".select-items");

  // Toggle the visibility of the custom dropdown menu
  selected.addEventListener("click", () => {
    items.classList.toggle("select-hide");
  });

  // Handle option selection
  document.querySelectorAll(".select-items div").forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.getAttribute("data-value");
      const imgSrc = option.getAttribute("data-img-src");

      selected.innerHTML = `<img src="${imgSrc}" alt="${value}">`;
      items.classList.add("select-hide");

      // Update the page content based on the selected language
      updateLanguage(value);
    });
  });

  // Function to update the language on the page
  function updateLanguage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        el.innerHTML = translations[language][key];
      }
    });
  }

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      items.classList.add("select-hide");
    }
  });
});

