// Codi JavaScript en script.js

// Espera a que la pàgina estigui totalment carregada abans d'executar el codi
document.addEventListener('DOMContentLoaded', function() {
    // Obté una referència a l'element de formulari
    var form = document.querySelector('form');
  
    // Afegir un gestor d'esdeveniments a l'enviar el formulari
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar l'enviament del formulari per defecte
  
      // Obté el valor del camp de consulta
      var consulta = document.getElementById('consulta').value;
  
      // Realitza alguna acció amb la consulta, com enviar-la a processar_consulta.php o mostrar-la a la pàgina
  
      // Mostrar la consulta a la pàgina
      var resultat = document.getElementById('resultat');
      resultat.innerHTML = "La teva consulta: " + consulta;
    });
  });
  