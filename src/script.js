/**
 * @fileoverview Script para gestionar la interactividad de la sección de Preguntas Frecuentes (FAQ)
 * con un patrón de Acordeón (solo una pregunta abierta a la vez).
 * 
 * Utiliza la clase 'active' para controlar el estado visual (abierto/cerrado)
 * a través de CSS, y actualiza los iconos y atributos ARIA para accesibilidad.
 * 
 * @author OsOsorioP
 */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const questionContainer = item.querySelector(".faq-question");
  const toggleButton = item.querySelector(".faq-toggle");
  const icon = toggleButton.querySelector("i");

  questionContainer.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");

        const otherIcon = otherItem.querySelector(".faq-toggle i");
        otherIcon.classList.remove("bx-x");
        otherIcon.classList.add("bx-plus");
        otherItem
          .querySelector(".faq-toggle")
          .setAttribute("aria-label", "Abrir respuesta");
      }
    });

    item.classList.toggle("active");

    const isActive = item.classList.contains("active");
    if (isActive) {
      icon.classList.remove("bx-plus");
      icon.classList.add("bx-x");
      toggleButton.setAttribute("aria-label", "Cerrar respuesta");
    } else {
      icon.classList.remove("bx-x");
      icon.classList.add("bx-plus");
      toggleButton.setAttribute("aria-label", "Abrir respuesta");
    }
  });

  if (item.classList.contains("active")) {
    toggleButton.setAttribute("aria-label", "Cerrar respuesta");
  } else {
    toggleButton.setAttribute("aria-label", "Abrir respuesta");
  }
});
