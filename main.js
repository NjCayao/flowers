onload = () => {
  document.body.classList.remove("container");
  
  // Efecto de escritura
  const text = "Una flor para ti Mirela ❤️";
  const typedTextElement = document.getElementById("typed-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typedTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // Velocidad de escritura (150ms por letra)
    }
  }

  // Iniciar el efecto de escritura después de 3 segundos para que las flores empiecen a crecer
  setTimeout(typeWriter, 3000);
};
